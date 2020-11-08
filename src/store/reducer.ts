import { combineReducers } from 'redux';
import { CREATE_PAGINATION } from './actions';

function paginationReducer(
  state = { page: 0, pages: 1, pagination: [] },
  action: { type: string; total: number }
) {
  switch (action.type) {
    case CREATE_PAGINATION: {
      const pages = Math.ceil(action.total / 100);
      let pagination: any[] = [];
      let index = 0;
      while (index < action.total) {
        pagination.push([index + 1, index + 10]);
        index += 10;
      }
      console.log(pagination);

      return { page: 1, pages, pagination };
    }
    default:
      return state;
  }
}

export default combineReducers({ pagination: paginationReducer });

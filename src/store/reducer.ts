import { combineReducers } from 'redux';
import { Pagination, PaginationAction } from '../interfaces/redux';
import { CREATE_PAGINATION, INITIAL_FINAL, PAGE } from './actions';

function paginationReducer(
  state: Pagination = {
    page: 0,
    pages: 1,
    pagination: [],
    initialFinal: [1, 10],
  },
  action: PaginationAction = {
    page: 0,
    total: 0,
    type: '',
    initialFinal: [],
  }
) {
  const {
    initialFinal, page, total, type
  } = action;
  switch (type) {
    case CREATE_PAGINATION: {
      const pages = Math.ceil(total / 100);
      let pagination: any[] = [];
      let index = 0;
      while (index < total) {
        pagination.push([index + 1, index + 10]);
        index += 10;
      }
      return { page: 1, pages, pagination };
    }
    case PAGE: {
      return { ...state, page };
    }
    case INITIAL_FINAL: {
      return { ...state, initialFinal };
    }
    default:
      return state;
  }
}

export default combineReducers({ pagination: paginationReducer });

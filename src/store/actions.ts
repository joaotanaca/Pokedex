export const CREATE_PAGINATION = 'CREATE_PAGINATION';
export const PAGE = 'PAGE';
export const INITIAL_FINAL = 'INITIAL_FINAL';

export const createPagination = (total: number) => ({
  type: CREATE_PAGINATION,
  total,
});

export const setPage = (page: number) => ({
  type: CREATE_PAGINATION,
  page,
});

export const setInitialFinal = (initialFinal: number[]) => ({
  type: INITIAL_FINAL,
  initialFinal,
});

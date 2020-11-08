export const CREATE_PAGINATION = 'CREATE_PAGINATION';

export const createPagination = (total: number) => ({
  type: CREATE_PAGINATION,
  total,
});

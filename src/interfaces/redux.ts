export interface Pagination {
  page: number;
  pages: number;
  pagination: number[][];
  initialFinal: number[];
}

export interface StatesRedux {
  pagination: Pagination;
}

export interface PaginationAction {
  type: string;
  total: number;
  page: number;
  initialFinal: number[];
}

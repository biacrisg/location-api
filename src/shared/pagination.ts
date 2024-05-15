export interface WithPagination<T> {
  data: T[];
  totalCount: number;
  hasNextPage: boolean;
}

export type WithPaginationParams<T = any> = {
  page?: number;
  pageSize?: number;
} & T;

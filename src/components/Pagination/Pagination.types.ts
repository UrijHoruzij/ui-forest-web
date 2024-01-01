import {CSSProperties} from "react";

export interface PaginationProps{
    className?: string,
  style?: CSSProperties,
  arrowShow?: boolean,
  onPageChange: Function,
  totalCount: number,
  siblingCount: number,
  currentPage: number,
  pageSize: number,
}
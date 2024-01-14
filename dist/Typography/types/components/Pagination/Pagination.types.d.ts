import { CSSProperties } from 'react';
export interface PaginationProps {
    className?: string;
    style?: CSSProperties;
    arrowShow?: boolean;
    onPageChange: (e: any) => void;
    totalCount: number;
    siblingCount: number;
    currentPage: number;
    pageSize: number;
}

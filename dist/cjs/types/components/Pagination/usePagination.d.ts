export declare const DOTS = "...";
interface usePaginationProps {
    totalCount: number;
    pageSize: number;
    siblingCount: number;
    currentPage: number;
}
export declare const usePagination: (props: usePaginationProps) => any[] | undefined;
export {};

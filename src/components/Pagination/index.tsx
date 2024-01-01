import {FC} from "react";
import { PaginationProps } from "./Pagination.types";
import { usePagination, DOTS } from "./usePagination";
import styles from "./Pagination.module.css";

const Pagination:FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount,
    currentPage,
    pageSize,
    arrowShow,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange?.length! < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange.length - 1];
  return (
    <ul {...props} className={[styles.wrapper, props.className].join(' ')} >
      {arrowShow ? (
        <li
          className={[styles.paginationItem, 
            currentPage === 1?styles.disabled:undefined ,
          ].join(' ')}
          onClick={onPrevious}
        >
          <div
            className={[styles.arrow, styles.left, 
              currentPage === 1 ? styles.disabled:undefined ,
            ].join(' ')}
          />
        </li>
      ) : null}
      {paginationRange?.map((pageNumber:string|number) => {
        if (pageNumber === DOTS) {
          return (
            <li className={styles.paginationItemDots}>...</li>
          );
        }
        return (
          <li
            className={[styles.paginationItem, 
              pageNumber === currentPage ? styles.selected: undefined,
            ].join(' ')}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {arrowShow ? (
        <li
          className={[styles.paginationItem, 
            currentPage === lastPage? styles.disabled: undefined,
          ].join(' ')}
          onClick={onNext}
        >
          <div
            className={[styles.arrow, styles.right, 
              currentPage === lastPage ? styles.disabled: undefined,
            ].join(' ')}
          />
        </li>
      ) : null}
    </ul>
  );
};


// Pagination.defaultProps = {
//   arrowShow: true,
//   siblingCount: 1,
// };
export default Pagination;

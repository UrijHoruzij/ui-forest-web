import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
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
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classNames([styles.wrapper], props.className)} {...props}>
      {arrowShow ? (
        <li
          className={classNames(styles.paginationItem, {
            [styles.disabled]: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div
            className={classNames(styles.arrow, styles.left, {
              [styles.disabled]: currentPage === 1,
            })}
          />
        </li>
      ) : null}
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className={classNames([styles.paginationItemDots])}>...</li>
          );
        }
        return (
          <li
            className={classNames(styles.paginationItem, {
              [styles.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {arrowShow ? (
        <li
          className={classNames(styles.paginationItem, {
            [styles.disabled]: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div
            className={classNames(styles.arrow, styles.right, {
              [styles.disabled]: currentPage === lastPage,
            })}
          />
        </li>
      ) : null}
    </ul>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  arrowShow: PropTypes.bool,
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
};

Pagination.defaultProps = {
  arrowShow: true,
  siblingCount: 1,
};
export default Pagination;

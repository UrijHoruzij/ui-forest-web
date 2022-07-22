"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _usePagination = require("./usePagination");

var _PaginationModule = _interopRequireDefault(require("./Pagination.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Pagination = function Pagination(props) {
  var onPageChange = props.onPageChange,
      totalCount = props.totalCount,
      siblingCount = props.siblingCount,
      currentPage = props.currentPage,
      pageSize = props.pageSize,
      arrowShow = props.arrowShow;
  var paginationRange = (0, _usePagination.usePagination)({
    currentPage: currentPage,
    totalCount: totalCount,
    siblingCount: siblingCount,
    pageSize: pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  var onNext = function onNext() {
    onPageChange(currentPage + 1);
  };

  var onPrevious = function onPrevious() {
    onPageChange(currentPage - 1);
  };

  var lastPage = paginationRange[paginationRange.length - 1];
  return /*#__PURE__*/_react["default"].createElement("ul", _extends({
    className: (0, _classnames["default"])([_PaginationModule["default"].wrapper], props.className)
  }, props), arrowShow ? /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _classnames["default"])(_PaginationModule["default"].paginationItem, _defineProperty({}, _PaginationModule["default"].disabled, currentPage === 1)),
    onClick: onPrevious
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(_PaginationModule["default"].arrow, _PaginationModule["default"].left, _defineProperty({}, _PaginationModule["default"].disabled, currentPage === 1))
  })) : null, paginationRange.map(function (pageNumber) {
    if (pageNumber === _usePagination.DOTS) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: (0, _classnames["default"])([_PaginationModule["default"].paginationItemDots])
      }, "...");
    }

    return /*#__PURE__*/_react["default"].createElement("li", {
      className: (0, _classnames["default"])(_PaginationModule["default"].paginationItem, _defineProperty({}, _PaginationModule["default"].selected, pageNumber === currentPage)),
      onClick: function onClick() {
        return onPageChange(pageNumber);
      }
    }, pageNumber);
  }), arrowShow ? /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _classnames["default"])(_PaginationModule["default"].paginationItem, _defineProperty({}, _PaginationModule["default"].disabled, currentPage === lastPage)),
    onClick: onNext
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(_PaginationModule["default"].arrow, _PaginationModule["default"].right, _defineProperty({}, _PaginationModule["default"].disabled, currentPage === lastPage))
  })) : null);
};

Pagination.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  arrowShow: _propTypes["default"].bool,
  onPageChange: _propTypes["default"].func,
  totalCount: _propTypes["default"].number,
  siblingCount: _propTypes["default"].number,
  currentPage: _propTypes["default"].number,
  pageSize: _propTypes["default"].number
};
Pagination.defaultProps = {
  arrowShow: true,
  siblingCount: 1
};
var _default = Pagination;
exports["default"] = _default;
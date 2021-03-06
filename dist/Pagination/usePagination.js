"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePagination = exports.DOTS = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DOTS = "...";
exports.DOTS = DOTS;

var range = function range(start, end) {
  var length = end - start + 1;
  return Array.from({
    length: length
  }, function (_, idx) {
    return idx + start;
  });
};

var usePagination = function usePagination(_ref) {
  var totalCount = _ref.totalCount,
      pageSize = _ref.pageSize,
      _ref$siblingCount = _ref.siblingCount,
      siblingCount = _ref$siblingCount === void 0 ? 1 : _ref$siblingCount,
      currentPage = _ref.currentPage;
  var paginationRange = (0, _react.useMemo)(function () {
    var totalPageCount = Math.ceil(totalCount / pageSize);
    var totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    var leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    var rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    var shouldShowLeftDots = leftSiblingIndex > 2;
    var shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    var firstPageIndex = 1;
    var lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      var leftItemCount = 3 + 2 * siblingCount;
      var leftRange = range(1, leftItemCount);
      return [].concat(_toConsumableArray(leftRange), [DOTS, totalPageCount]);
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      var rightItemCount = 3 + 2 * siblingCount;
      var rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS].concat(_toConsumableArray(rightRange));
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      var middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS].concat(_toConsumableArray(middleRange), [DOTS, lastPageIndex]);
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};

exports.usePagination = usePagination;
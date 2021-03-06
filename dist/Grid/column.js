"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _GridModule = _interopRequireDefault(require("./Grid.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var changeCol = function changeCol(col) {
  switch (col) {
    case 1:
      return _GridModule["default"].col_1;

    case 2:
      return _GridModule["default"].col_2;

    case 3:
      return _GridModule["default"].col_3;

    case 4:
      return _GridModule["default"].col_4;

    case 5:
      return _GridModule["default"].col_5;

    case 6:
      return _GridModule["default"].col_6;

    case 7:
      return _GridModule["default"].col_7;

    case 8:
      return _GridModule["default"].col_8;

    case 9:
      return _GridModule["default"].col_9;

    case 10:
      return _GridModule["default"].col_10;

    case 11:
      return _GridModule["default"].col_11;

    case 12:
      return _GridModule["default"].col_12;

    default:
      return;
  }
};

var changeSm = function changeSm(sm) {
  switch (sm) {
    case 1:
      return _GridModule["default"].col_sm_1;

    case 2:
      return _GridModule["default"].col_sm_2;

    case 3:
      return _GridModule["default"].col_sm_3;

    case 4:
      return _GridModule["default"].col_sm_4;

    case 5:
      return _GridModule["default"].col_sm_5;

    case 6:
      return _GridModule["default"].col_sm_6;

    case 7:
      return _GridModule["default"].col_sm_7;

    case 8:
      return _GridModule["default"].col_sm_8;

    case 9:
      return _GridModule["default"].col_sm_9;

    case 10:
      return _GridModule["default"].col_sm_10;

    case 11:
      return _GridModule["default"].col_sm_11;

    case 12:
      return _GridModule["default"].col_sm_12;

    default:
      return;
  }
};

var changeMd = function changeMd(md) {
  switch (md) {
    case 1:
      return _GridModule["default"].col_md_1;

    case 2:
      return _GridModule["default"].col_md_2;

    case 3:
      return _GridModule["default"].col_md_3;

    case 4:
      return _GridModule["default"].col_md_4;

    case 5:
      return _GridModule["default"].col_md_5;

    case 6:
      return _GridModule["default"].col_md_6;

    case 7:
      return _GridModule["default"].col_md_7;

    case 8:
      return _GridModule["default"].col_md_8;

    case 9:
      return _GridModule["default"].col_md_9;

    case 10:
      return _GridModule["default"].col_md_10;

    case 11:
      return _GridModule["default"].col_md_11;

    case 12:
      return _GridModule["default"].col_md_12;

    default:
      return;
  }
};

var changeLg = function changeLg(lg) {
  switch (lg) {
    case 1:
      return _GridModule["default"].col_lg_1;

    case 2:
      return _GridModule["default"].col_lg_2;

    case 3:
      return _GridModule["default"].col_lg_3;

    case 4:
      return _GridModule["default"].col_lg_4;

    case 5:
      return _GridModule["default"].col_lg_5;

    case 6:
      return _GridModule["default"].col_lg_6;

    case 7:
      return _GridModule["default"].col_lg_7;

    case 8:
      return _GridModule["default"].col_lg_8;

    case 9:
      return _GridModule["default"].col_lg_9;

    case 10:
      return _GridModule["default"].col_lg_10;

    case 11:
      return _GridModule["default"].col_lg_11;

    case 12:
      return _GridModule["default"].col_lg_12;

    default:
      return;
  }
};

var changeXl = function changeXl(xl) {
  switch (xl) {
    case 1:
      return _GridModule["default"].col_xl_1;

    case 2:
      return _GridModule["default"].col_xl_2;

    case 3:
      return _GridModule["default"].col_xl_3;

    case 4:
      return _GridModule["default"].col_xl_4;

    case 5:
      return _GridModule["default"].col_xl_5;

    case 6:
      return _GridModule["default"].col_xl_6;

    case 7:
      return _GridModule["default"].col_xl_7;

    case 8:
      return _GridModule["default"].col_xl_8;

    case 9:
      return _GridModule["default"].col_xl_9;

    case 10:
      return _GridModule["default"].col_xl_10;

    case 11:
      return _GridModule["default"].col_xl_11;

    case 12:
      return _GridModule["default"].col_xl_12;

    default:
      return;
  }
};

var changeXxl = function changeXxl(xxl) {
  switch (xxl) {
    case 1:
      return _GridModule["default"].col_xxl_1;

    case 2:
      return _GridModule["default"].col_xxl_2;

    case 3:
      return _GridModule["default"].col_xxl_3;

    case 4:
      return _GridModule["default"].col_xxl_4;

    case 5:
      return _GridModule["default"].col_xxl_5;

    case 6:
      return _GridModule["default"].col_xxl_6;

    case 7:
      return _GridModule["default"].col_xxl_7;

    case 8:
      return _GridModule["default"].col_xxl_8;

    case 9:
      return _GridModule["default"].col_xxl_9;

    case 10:
      return _GridModule["default"].col_xxl_10;

    case 11:
      return _GridModule["default"].col_xxl_11;

    case 12:
      return _GridModule["default"].col_xxl_12;

    default:
      return;
  }
};

var Column = function Column(props) {
  var children = props.children;

  var changeClassName = function changeClassName(props) {
    return (0, _classnames["default"])(props.className, changeCol(props.col), changeSm(props.sm), changeMd(props.md), changeLg(props.lg), changeXl(props.xl), changeXxl(props.xxl));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: changeClassName(props)
  }, children);
};

Column.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  col: _propTypes["default"].number,
  sm: _propTypes["default"].number,
  md: _propTypes["default"].number,
  lg: _propTypes["default"].number,
  xl: _propTypes["default"].number,
  xxl: _propTypes["default"].number
};
var _default = Column;
exports["default"] = _default;
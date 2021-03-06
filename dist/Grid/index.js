"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = _interopRequireDefault(require("./container"));

var _row = _interopRequireDefault(require("./row"));

var _column = _interopRequireDefault(require("./column"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Grid = function Grid(props) {
  var children = props.children;
  return /*#__PURE__*/_react["default"].createElement(_container["default"], null, children);
};

Grid.Container = _container["default"];
Grid.Row = _row["default"];
Grid.Column = _column["default"];
Grid.propTypes = {
  children: _propTypes["default"].node
};
var _default = Grid;
exports["default"] = _default;
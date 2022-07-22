"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GridModule = _interopRequireDefault(require("./Grid.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = function Container(props) {
  var children = props.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _GridModule["default"].container
  }, children);
};

Container.propTypes = {
  children: _propTypes["default"].node
};
var _default = Container;
exports["default"] = _default;
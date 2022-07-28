"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _remarkMath = _interopRequireDefault(require("remark-math"));

var _rehypeKatex = _interopRequireDefault(require("rehype-katex"));

require("katex/dist/katex.min.css");

var _MarkdownModule = _interopRequireDefault(require("./Markdown.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Markdown = function Markdown(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _MarkdownModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], _extends({
    remarkPlugins: [_remarkMath["default"]],
    rehypePlugins: [_rehypeKatex["default"]]
  }, props)));
};

Markdown.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
var _default = Markdown;
exports["default"] = _default;
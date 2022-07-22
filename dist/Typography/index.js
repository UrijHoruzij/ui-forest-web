"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TypographyModule = _interopRequireDefault(require("./Typography.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var changeStyle = function changeStyle(fontStyle) {
  switch (fontStyle) {
    case "normal":
      return _TypographyModule["default"].normal;

    case "italic":
      return _TypographyModule["default"].italic;

    case "oblique":
      return _TypographyModule["default"].oblique;

    default:
      return _TypographyModule["default"].normal;
  }
};

var changeColor = function changeColor(color) {
  switch (color) {
    case "accent":
      return _TypographyModule["default"].accent;

    case "secondary":
      return _TypographyModule["default"].secondary;

    case "text":
      return _TypographyModule["default"].text;

    default:
      return;
  }
};

var changeTransform = function changeTransform(transform) {
  switch (transform) {
    case "capitalize":
      return _TypographyModule["default"].capitalize;

    case "lowercase":
      return _TypographyModule["default"].lowercase;

    case "uppercase":
      return _TypographyModule["default"].uppercase;

    default:
      return;
  }
};

var changeDecoration = function changeDecoration(decoration) {
  switch (decoration) {
    case "overline":
      return _TypographyModule["default"].overline;

    case "underline":
      return _TypographyModule["default"].underline;

    case "line-through":
      return _TypographyModule["default"].lineThrough;

    default:
      return;
  }
};

var changeType = function changeType(type) {
  switch (type) {
    case "h1":
      return _TypographyModule["default"].h1;

    case "h2":
      return _TypographyModule["default"].h2;

    case "h3":
      return _TypographyModule["default"].h3;

    case "h4":
      return _TypographyModule["default"].h4;

    case "h5":
      return _TypographyModule["default"].h5;

    case "h6":
      return _TypographyModule["default"].h6;

    case "text":
      return _TypographyModule["default"].p;

    case "caption":
      return _TypographyModule["default"].caption;

    default:
      return _TypographyModule["default"].p;
  }
};

var Typography = function Typography(props) {
  var changeClassName = function changeClassName(props) {
    return (0, _classnames["default"])(props.className, changeType(props.type), changeStyle(props.fontStyle), changeColor(props.color), changeTransform(props.transform), changeDecoration(props.decoration));
  };

  switch (props.type) {
    case "h1":
      return /*#__PURE__*/_react["default"].createElement("h1", _extends({
        className: changeClassName(props)
      }, props));

    case "h2":
      return /*#__PURE__*/_react["default"].createElement("h2", _extends({
        className: changeClassName(props)
      }, props));

    case "h3":
      return /*#__PURE__*/_react["default"].createElement("h3", _extends({
        className: changeClassName(props)
      }, props));

    case "h4":
      return /*#__PURE__*/_react["default"].createElement("h4", _extends({
        className: changeClassName(props)
      }, props));

    case "h5":
      return /*#__PURE__*/_react["default"].createElement("h5", _extends({
        className: changeClassName(props)
      }, props));

    case "h6":
      return /*#__PURE__*/_react["default"].createElement("h6", _extends({
        className: changeClassName(props)
      }, props));

    case "text":
      return /*#__PURE__*/_react["default"].createElement("p", _extends({
        className: changeClassName(props)
      }, props));

    case "caption":
      return /*#__PURE__*/_react["default"].createElement("figcaption", _extends({
        className: changeClassName(props)
      }, props));

    default:
      return /*#__PURE__*/_react["default"].createElement("p", _extends({
        className: changeClassName(props)
      }, props));
  }
};

Typography.propTypes = {
  type: _propTypes["default"].oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "caption", "text"]),
  color: _propTypes["default"].oneOf(["accent", "text", "secondary"]),
  children: _propTypes["default"].node,
  fontStyle: _propTypes["default"].oneOf(["normal", "italic", "oblique"]),
  transform: _propTypes["default"].oneOf(["capitalize", "lowercase", "uppercase"]),
  decoration: _propTypes["default"].oneOf(["underline", "overline", "line-through"]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
};
Typography.defaultProps = {
  type: "text",
  color: "text"
};
var _default = Typography;
exports["default"] = _default;
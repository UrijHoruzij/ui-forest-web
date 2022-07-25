"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var changeSize = function changeSize(size) {
  switch (size) {
    case 'small':
      return _ButtonModule["default"].small;

    case 'medium':
      return _ButtonModule["default"].medium;

    case 'large':
      return _ButtonModule["default"].large;

    default:
      return _ButtonModule["default"].medium;
  }
};

var changeDanger = function changeDanger(variant, danger) {
  if (danger) {
    switch (variant) {
      case 'primary':
        return _ButtonModule["default"].primary__danger;

      case 'default':
        return _ButtonModule["default"].default__danger;

      case 'text':
        return _ButtonModule["default"].text__danger;

      case 'link':
        return _ButtonModule["default"].link__danger;

      default:
        return;
    }
  }
};

var changeVariant = function changeVariant(variant) {
  switch (variant) {
    case 'primary':
      return _ButtonModule["default"].primary;

    case 'default':
      return _ButtonModule["default"]["default"];

    case 'text':
      return _ButtonModule["default"].text;

    case 'link':
      return _ButtonModule["default"].link;

    default:
      return;
  }
};

var Button = function Button(props) {
  var children = props.children,
      loading = props.loading;

  var changeClassName = function changeClassName(props) {
    return (0, _classnames["default"])(props.className, _ButtonModule["default"].container, _defineProperty({}, _ButtonModule["default"].disabled, props.disabled), changeDanger(props.variant, props.danger), changeSize(props.size), changeVariant(props.variant));
  };

  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: changeClassName(props)
  }, props), children);
};

Button.propTypes = {
  as: _propTypes["default"].elementType,
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  danger: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  href: _propTypes["default"].string,
  // loading: PropTypes.bool,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  styles: _propTypes["default"].object,
  type: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['button', 'reset', 'submit']), _propTypes["default"].string]),
  variant: _propTypes["default"].oneOf(['primary', 'default', 'text', 'link'])
};
Button.defaultProps = {
  type: 'button',
  size: 'medium',
  // loading: false,
  danger: false,
  disabled: false,
  variant: 'default'
};
var _default = Button;
exports["default"] = _default;
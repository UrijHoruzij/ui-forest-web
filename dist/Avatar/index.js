"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AvatarModule = _interopRequireDefault(require("./Avatar.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var changeSizeContainer = function changeSizeContainer(size) {
  switch (size) {
    case 'small':
      return _AvatarModule["default"].wrapper__small;

    case 'medium':
      return _AvatarModule["default"].wrapper__medium;

    case 'large':
      return _AvatarModule["default"].wrapper__large;

    default:
      return '';
  }
};

var changeSize = function changeSize(size) {
  switch (size) {
    case 'small':
      return _AvatarModule["default"].image__small;

    case 'medium':
      return _AvatarModule["default"].image__medium;

    case 'large':
      return _AvatarModule["default"].image__large;

    default:
      return '';
  }
};

var changeSizeSymbol = function changeSizeSymbol(size) {
  switch (size) {
    case 'small':
      return _AvatarModule["default"].symbol__small;

    case 'medium':
      return _AvatarModule["default"].symbol__medium;

    case 'large':
      return _AvatarModule["default"].symbol__large;

    default:
      return '';
  }
};

var changeSizeOnline = function changeSizeOnline(size) {
  switch (size) {
    case 'small':
      return _AvatarModule["default"].checkOnline__small;

    case 'medium':
      return _AvatarModule["default"].checkOnline__medium;

    case 'large':
      return _AvatarModule["default"].checkOnline__large;

    default:
      return '';
  }
};

var generateColor = function generateColor() {
  return '#' + Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0');
};

var Avatar = function Avatar(props) {
  var className = props.className,
      fullname = props.fullname,
      size = props.size,
      isOnline = props.isOnline;
  var firstChar = fullname ? fullname[0].toUpperCase() : '';

  var changeImageClassName = function changeImageClassName(props) {
    return (0, _classnames["default"])(props.imageClassName, _AvatarModule["default"].image, changeSize(props.size));
  };

  var renderImage = function renderImage(props, firstChar) {
    var Component = props.component;

    if (props.component) {
      return /*#__PURE__*/_react["default"].createElement(Component, {
        style: props.imageStyle,
        className: changeImageClassName(props),
        alt: props.fullname
      });
    }

    if (props.avatar) {
      return /*#__PURE__*/_react["default"].createElement("img", {
        style: props.imageStyle,
        className: changeImageClassName(props),
        src: props.avatar,
        alt: props.fullname
      });
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        background: generateColor()
      },
      className: (0, _classnames["default"])(_AvatarModule["default"].symbol, changeSizeContainer(props.size), changeSizeSymbol(props.size))
    }, firstChar);
  };

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _classnames["default"])(className, _AvatarModule["default"].wrapper, changeSizeContainer(size))
  }, props), renderImage(props, firstChar), isOnline && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(_AvatarModule["default"].checkOnline, changeSizeOnline(size))
  }));
};

Avatar.propTypes = {
  component: _propTypes["default"].node,
  fullname: _propTypes["default"].string,
  avatar: _propTypes["default"].string,
  size: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  imageClassName: _propTypes["default"].string,
  imageStyle: _propTypes["default"].object,
  isOnline: _propTypes["default"].bool
};
var _default = Avatar;
exports["default"] = _default;
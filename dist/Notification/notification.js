"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../");

var _NotificationModule = _interopRequireDefault(require("./Notification.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Notification = function Notification(props) {
  var _classNames;

  var type = props.type;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      exit = _useState2[0],
      setExit = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      intervalID = _useState6[0],
      setIntervalID = _useState6[1];

  var handleStartTimer = function handleStartTimer() {
    var id = setInterval(function () {
      setWidth(function (prev) {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 20);
    setIntervalID(id);
  };

  var handlePauseTimer = function handlePauseTimer() {
    clearInterval(intervalID);
  };

  var handleCloseNotification = function handleCloseNotification() {
    handlePauseTimer();
    setExit(true);
    setTimeout(function () {
      props.dispatch({
        type: 'REMOVE_NOTIFICATION',
        id: props.id
      });
    }, 400);
  };

  var handleClose = function handleClose() {
    handlePauseTimer();
    setExit(true);
    props.dispatch({
      type: 'REMOVE_NOTIFICATION',
      id: props.id
    });
  };

  (0, _react.useEffect)(function () {
    if (width === 100) {
      handleCloseNotification();
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    handleStartTimer();
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: handlePauseTimer,
    onMouseLeave: handleStartTimer,
    className: (0, _classnames["default"])(_NotificationModule["default"].notification__item, (_classNames = {}, _defineProperty(_classNames, _NotificationModule["default"].notification__success, type === 'SUCCESS'), _defineProperty(_classNames, _NotificationModule["default"].notification__error, type === 'ERROR'), _defineProperty(_classNames, _NotificationModule["default"].notification__warring, type === 'WARNING'), _defineProperty(_classNames, _NotificationModule["default"].notification__info, type === 'INFO'), _defineProperty(_classNames, _NotificationModule["default"].notification__exit, exit), _classNames))
  }, props), /*#__PURE__*/React.createElement("div", {
    className: _NotificationModule["default"].notification__border
  }), /*#__PURE__*/React.createElement("div", {
    className: _NotificationModule["default"].notification__content
  }, /*#__PURE__*/React.createElement(_.Typography, {
    type: "h6"
  }, props.title), /*#__PURE__*/React.createElement(_.Typography, {
    type: "text"
  }, props.message)), /*#__PURE__*/React.createElement("div", {
    className: _NotificationModule["default"].notification__close,
    onClick: function onClick(e) {
      return handleClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: _NotificationModule["default"].notification__closeIcon
  })), /*#__PURE__*/React.createElement("div", {
    className: _NotificationModule["default"].notification__bar,
    style: {
      width: "".concat(100 - width, "%")
    }
  }));
};

Notification.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  type: _propTypes["default"].oneOf(['SUCCESS', 'ERROR', 'WARNING', 'INFO'])
};
Notification.defaultProps = {
  type: 'SUCCESS'
};
var _default = Notification;
exports["default"] = _default;
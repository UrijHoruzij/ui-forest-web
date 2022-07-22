"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dark", {
  enumerable: true,
  get: function get() {
    return _darkModule["default"];
  }
});
Object.defineProperty(exports, "light", {
  enumerable: true,
  get: function get() {
    return _lightModule["default"];
  }
});

var _lightModule = _interopRequireDefault(require("./light.module.css"));

var _darkModule = _interopRequireDefault(require("./dark.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
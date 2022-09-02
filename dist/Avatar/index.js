"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _avatar=_interopRequireDefault(require("./avatar"));var _group=_interopRequireDefault(require("./group"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var Avatar=function Avatar(props){return/*#__PURE__*/_react["default"].createElement(_avatar["default"],props)};Avatar.Group=_group["default"];Avatar.propTypes={component:_propTypes["default"].node,fullname:_propTypes["default"].string,avatar:_propTypes["default"].string,size:_propTypes["default"].oneOf(["small","medium","large"]),className:_propTypes["default"].string,style:_propTypes["default"].object,imageClassName:_propTypes["default"].string,imageStyle:_propTypes["default"].object,isOnline:_propTypes["default"].bool};Avatar.defaultProps={size:"small",isOnline:false};var _default=Avatar;exports["default"]=_default;
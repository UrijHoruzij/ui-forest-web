"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _classnames=_interopRequireDefault(require("classnames"));var _InputModule=_interopRequireDefault(require("./Input.module.css"));var _textarea=_interopRequireDefault(require("./textarea"));var _password=_interopRequireDefault(require("./password"));var _container=_interopRequireDefault(require("./container"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var changeSize=function changeSize(size){switch(size){case"small":return _InputModule["default"].small;case"medium":return _InputModule["default"].medium;case"large":return _InputModule["default"].large;default:return _InputModule["default"].medium;}};var Input=function Input(props){var _classNames;var id=props.id,name=props.name,status=props.status,size=props.size;return/*#__PURE__*/_react["default"].createElement(_container["default"],props,/*#__PURE__*/_react["default"].createElement("input",_extends({className:(0,_classnames["default"])(_InputModule["default"].input,(_classNames={},_defineProperty(_classNames,_InputModule["default"].error,status==="error"),_defineProperty(_classNames,_InputModule["default"].success,status==="success"),_classNames),changeSize(size))},props,{id:id?id:name})),/*#__PURE__*/_react["default"].createElement("div",{className:_InputModule["default"].container__focus}))};Input.Textarea=_textarea["default"];Input.Password=_password["default"];Input.propTypes={id:_propTypes["default"].string,value:_propTypes["default"].any.isRequired,placeholder:_propTypes["default"].string,type:_propTypes["default"].oneOf(["email","password","tel","text","url"]),name:_propTypes["default"].string,help:_propTypes["default"].string,className:_propTypes["default"].string,size:_propTypes["default"].oneOf(["small","medium","large"]),status:_propTypes["default"].oneOf(["error","default"]),style:_propTypes["default"].object,onChange:_propTypes["default"].func,visibleTitle:_propTypes["default"].bool,disabled:_propTypes["default"].bool,onPressEnter:_propTypes["default"].func};Input.defaultProps={type:"text",status:"default",size:"medium",visibleTitle:true};var _default=Input;exports["default"]=_default;
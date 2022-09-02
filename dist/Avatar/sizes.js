"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.changeSizeSymbol=exports.changeSizeOnline=exports.changeSizeContainer=exports.changeSize=void 0;var _AvatarModule=_interopRequireDefault(require("./Avatar.module.css"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var changeSizeContainer=function changeSizeContainer(size){switch(size){case"small":return _AvatarModule["default"].wrapper__small;case"medium":return _AvatarModule["default"].wrapper__medium;case"large":return _AvatarModule["default"].wrapper__large;default:return _AvatarModule["default"].wrapper__small;}};exports.changeSizeContainer=changeSizeContainer;var changeSize=function changeSize(size){switch(size){case"small":return _AvatarModule["default"].image__small;case"medium":return _AvatarModule["default"].image__medium;case"large":return _AvatarModule["default"].image__large;default:return _AvatarModule["default"].image__small;}};exports.changeSize=changeSize;var changeSizeSymbol=function changeSizeSymbol(size){switch(size){case"small":return _AvatarModule["default"].symbol__small;case"medium":return _AvatarModule["default"].symbol__medium;case"large":return _AvatarModule["default"].symbol__large;default:return _AvatarModule["default"].symbol__small;}};exports.changeSizeSymbol=changeSizeSymbol;var changeSizeOnline=function changeSizeOnline(size){switch(size){case"small":return _AvatarModule["default"].checkOnline__small;case"medium":return _AvatarModule["default"].checkOnline__medium;case"large":return _AvatarModule["default"].checkOnline__large;default:return _AvatarModule["default"].checkOnline__small;}};exports.changeSizeOnline=changeSizeOnline;
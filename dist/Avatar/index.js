function _extends(){_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import styles from"./Avatar.module.css";var changeSizeContainer=function changeSizeContainer(size){switch(size){case"small":return styles.wrapper__small;case"medium":return styles.wrapper__medium;case"large":return styles.wrapper__large;default:return"";}};var changeSize=function changeSize(size){switch(size){case"small":return styles.image__small;case"medium":return styles.image__medium;case"large":return styles.image__large;default:return"";}};var changeSizeSymbol=function changeSizeSymbol(size){switch(size){case"small":return styles.symbol__small;case"medium":return styles.symbol__medium;case"large":return styles.symbol__large;default:return"";}};var changeSizeOnline=function changeSizeOnline(size){switch(size){case"small":return styles.checkOnline__small;case"medium":return styles.checkOnline__medium;case"large":return styles.checkOnline__large;default:return"";}};var generateColor=function generateColor(){return"#"+Math.floor(Math.random()*(256*256*256)).toString(16).padStart(6,"0")};var Avatar=function Avatar(props){var className=props.className,fullname=props.fullname,size=props.size,isOnline=props.isOnline;var firstChar=fullname?fullname[0].toUpperCase():"";var changeImageClassName=function changeImageClassName(props){return classNames(props.imageClassName,styles.image,changeSize(props.size))};var renderImage=function renderImage(props,firstChar){var Component=props.component;if(props.component){return/*#__PURE__*/React.createElement(Component,{style:props.imageStyle,className:changeImageClassName(props),alt:props.fullname})}if(props.avatar){return/*#__PURE__*/React.createElement("img",{style:props.imageStyle,className:changeImageClassName(props),src:props.avatar,alt:props.fullname})}return/*#__PURE__*/React.createElement("div",{style:{background:generateColor()},className:classNames(styles.symbol,changeSizeContainer(props.size),changeSizeSymbol(props.size))},firstChar)};return/*#__PURE__*/React.createElement("div",_extends({className:classNames(className,styles.wrapper,changeSizeContainer(size))},props),renderImage(props,firstChar),isOnline&&/*#__PURE__*/React.createElement("div",{className:classNames(styles.checkOnline,changeSizeOnline(size))}))};Avatar.propTypes={component:PropTypes.node,fullname:PropTypes.string,avatar:PropTypes.string,size:PropTypes.string,className:PropTypes.string,style:PropTypes.object,imageClassName:PropTypes.string,imageStyle:PropTypes.object,isOnline:PropTypes.bool};export default Avatar;
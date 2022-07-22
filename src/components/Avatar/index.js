import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Avatar.module.css';

const changeSizeContainer = (size) => {
	switch (size) {
		case 'small':
			return styles.wrapper__small;
		case 'medium':
			return styles.wrapper__medium;
		case 'large':
			return styles.wrapper__large;
		default:
			return '';
	}
};
const changeSize = (size) => {
	switch (size) {
		case 'small':
			return styles.image__small;
		case 'medium':
			return styles.image__medium;
		case 'large':
			return styles.image__large;
		default:
			return '';
	}
};
const changeSizeSymbol = (size) => {
	switch (size) {
		case 'small':
			return styles.symbol__small;
		case 'medium':
			return styles.symbol__medium;
		case 'large':
			return styles.symbol__large;
		default:
			return '';
	}
};

const changeSizeOnline = (size) => {
	switch (size) {
		case 'small':
			return styles.checkOnline__small;
		case 'medium':
			return styles.checkOnline__medium;
		case 'large':
			return styles.checkOnline__large;
		default:
			return '';
	}
};

const generateColor = () => {
	return (
		'#' +
		Math.floor(Math.random() * (256 * 256 * 256))
			.toString(16)
			.padStart(6, '0')
	);
};

const Avatar = (props) => {
	const { className, fullname, size, isOnline } = props;
	const firstChar = fullname ? fullname[0].toUpperCase() : '';
	const changeImageClassName = (props) => {
		return classNames(props.imageClassName, styles.image, changeSize(props.size));
	};
	const renderImage = (props, firstChar) => {
		let Component = props.component;
		if (props.component) {
			return (
				<Component style={props.imageStyle} className={changeImageClassName(props)} alt={props.fullname}></Component>
			);
		}
		if (props.avatar) {
			return (
				<img style={props.imageStyle} className={changeImageClassName(props)} src={props.avatar} alt={props.fullname} />
			);
		}
		return (
			<div
				style={{ background: generateColor() }}
				className={classNames(styles.symbol, changeSizeContainer(props.size), changeSizeSymbol(props.size))}>
				{firstChar}
			</div>
		);
	};
	return (
		<div className={classNames(className, styles.wrapper, changeSizeContainer(size))} {...props}>
			{renderImage(props, firstChar)}
			{isOnline && <div className={classNames(styles.checkOnline, changeSizeOnline(size))} />}
		</div>
	);
};

Avatar.propTypes = {
	component: PropTypes.node,
	fullname: PropTypes.string,
	avatar: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	imageClassName: PropTypes.string,
	imageStyle: PropTypes.object,
	isOnline: PropTypes.bool,
};

export default Avatar;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Avatar.module.css';
import { changeSizeContainer, changeSize, changeSizeSymbol, changeSizeOnline } from './sizes';

const generateColor = () => {
	return (
		'#' +
		Math.floor(Math.random() * (256 * 256 * 256))
			.toString(16)
			.padStart(6, '0')
	);
};

const AvatarComponent = (props) => {
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
				className={classNames(styles.symbol, changeSize(props.size), changeSizeSymbol(props.size))}>
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

AvatarComponent.propTypes = {
	component: PropTypes.node,
	fullname: PropTypes.string,
	avatar: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	className: PropTypes.string,
	style: PropTypes.object,
	imageClassName: PropTypes.string,
	imageStyle: PropTypes.object,
	isOnline: PropTypes.bool,
};
AvatarComponent.defaultProps = {
	size: 'small',
	isOnline: false,
};
export default AvatarComponent;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

const changeSize = (size) => {
	switch (size) {
		case 'small':
			return styles.small;
		case 'medium':
			return styles.medium;
		case 'large':
			return styles.large;
		default:
			return styles.medium;
	}
};
const changeDanger = (variant, danger) => {
	if (danger) {
		switch (variant) {
			case 'primary':
				return styles.primary__danger;
			case 'default':
				return styles.default__danger;
			case 'text':
				return styles.text__danger;
			case 'link':
				return styles.link__danger;
			default:
				return;
		}
	}
};
const changeVariant = (variant) => {
	switch (variant) {
		case 'primary':
			return styles.primary;
		case 'default':
			return styles.default;
		case 'text':
			return styles.text;
		case 'link':
			return styles.link;
		default:
			return;
	}
};

const Button = (props) => {
	const { children, loading } = props;
	const changeClassName = (props) => {
		return classNames(
			props.className,
			styles.container,
			{ [styles.disabled]: props.disabled },
			changeDanger(props.variant, props.danger),
			changeSize(props.size),
			changeVariant(props.variant),
		);
	};

	return (
		<button className={changeClassName(props)} {...props}>
			{/* {loading && <div className={styles.loading}></div>} */}
			{children}
		</button>
	);
};

Button.propTypes = {
	as: PropTypes.elementType,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	danger: PropTypes.bool,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	// loading: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	styles: PropTypes.object,
	type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string]),
	variant: PropTypes.oneOf(['primary', 'default', 'text', 'link']),
};

Button.defaultProps = {
	type: 'button',
	size: 'medium',
	// loading: false,
	danger: false,
	disabled: false,
	variant: 'default',
};

export default Button;

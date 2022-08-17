import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.css';
import Textarea from './textarea';

import InputContainer from './container';

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

const Input = (props) => {
	const { id, name, value, status, defaultValue, size } = props;
	return (
		<InputContainer {...props}>
			<input
				className={classNames(
					styles.input,
					{
						[styles.error]: status === 'error',
					},
					changeSize(size),
				)}
				{...props}
				value={value !== '' ? value : defaultValue}
				id={id ? id : name}
			/>
		</InputContainer>
	);
};

Input.Textarea = Textarea;

Input.propTypes = {
	id: PropTypes.string,
	value: PropTypes.any.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(['email', 'password', 'tel', 'text', 'url']),
	name: PropTypes.string,
	help: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	status: PropTypes.oneOf(['error', 'success', 'default']),
	style: PropTypes.object,
	onChange: PropTypes.func,
	visibleTitle: PropTypes.bool,
	defaultValue: PropTypes.string,
	disabled: PropTypes.bool,
	onPressEnter: PropTypes.func,
};

Input.defaultProps = {
	type: 'text',
	status: 'default',
	size: 'medium',
	visibleTitle: true,
};

export default Input;

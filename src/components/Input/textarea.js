import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.css';
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

const Textarea = (props) => {
	const { id, name, status, size } = props;
	return (
		<InputContainer {...props}>
			<textarea
				className={classNames(
					styles.input,
					{
						[styles.error]: status === 'error',
						[styles.success]: status === 'success',
					},
					changeSize(size),
				)}
				{...props}
				id={id ? id : name}
			/>
			<div className={styles.container__focus}></div>
		</InputContainer>
	);
};

Textarea.propTypes = {
	id: PropTypes.string,
	value: PropTypes.any.isRequired,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	help: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	status: PropTypes.oneOf(['error', 'success', 'default']),
	style: PropTypes.object,
	onChange: PropTypes.func,
	visibleTitle: PropTypes.bool,
	disabled: PropTypes.bool,
	onPressEnter: PropTypes.func,
};

Textarea.defaultProps = {
	status: 'default',
	size: 'medium',
	visibleTitle: true,
};

export default Textarea;

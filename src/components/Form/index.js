import React from 'react';
import PropTypes from 'prop-types';

export const Form = (props) => {
	const { children, onSubmit } = props;
	return (
		<form onSubmit={onSubmit} {...props} noValidate>
			{children}
		</form>
	);
};
Form.propTypes = {
	children: PropTypes.node,
	onSubmit: PropTypes.func,
	className: PropTypes.string,
	style: PropTypes.object,
};
export default Form;

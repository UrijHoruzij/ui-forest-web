import {FC} from 'react';
import {FormProps} from './Form.types'

export const Form:FC<FormProps> = (props) => {
	const { children, onSubmit } = props;
	return (
		<form {...props} onSubmit={onSubmit}  noValidate>
			{children}
		</form>
	);
};

export default Form;

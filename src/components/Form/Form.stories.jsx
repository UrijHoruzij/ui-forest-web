import { Form, useForm, Input } from '..';

export default {
	title: 'Components/Form',
	component: Form,
};

const validateInfo = (values) => {
	const errors = {};

	if (!values.login.trim()) {
		errors.login = 'Login required';
	}
	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 6) {
		errors.password = 'Password needs to be 6 characters or more';
	}
	return errors;
};

export const Default = () => {
	const { handleChange, handleSubmit, values, errors } = useForm({ login: '', password: '' }, validateInfo, () => {});
	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type="text"
				value={values.login}
				placeholder="Логин"
				name="login"
				onChange={handleChange}
				help={errors.login}
			/>
			<Input.Password
				value={values.password}
				placeholder="Пароль"
				name="password"
				onChange={handleChange}
				help={errors.password}
			/>
			<button type="submit">Авторизация</button>
		</Form>
	);
};

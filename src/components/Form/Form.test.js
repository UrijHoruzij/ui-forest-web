import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Form, useForm, Input, ThemeProvider } from '../';

describe('Input component', () => {
	test('Render input snapshot', () => {
		const validateInfo = (values) => {
			let errors = {};

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
		const { handleChange, handleSubmit, values, errors } = useForm({ login: '', password: '' }, validateInfo, () => {});

		const component = (
			<ThemeProvider>
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
				</Form>
			</ThemeProvider>
		);
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

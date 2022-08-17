import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input, ThemeProvider } from '../';

describe('Input component', () => {
	test('Render input snapshot', () => {
		const component = (
			<ThemeProvider>
				<Input type="text" value="" placeholder="Логин" name="login" onChange={() => {}} />
				<Input type="text" value="" placeholder="Логин" name="login" status="success" onChange={() => {}} />
				<Input
					type="text"
					value=""
					placeholder="Логин"
					name="login"
					help="Неправильный пароль"
					status="error"
					defaultValue="login"
					onChange={() => {}}
				/>
				<Input type="text" value="" placeholder="Логин" name="login" onChange={() => {}} visibleTitle={false} />
				<Input.Textarea value="" placeholder="Логин" name="login" onChange={() => {}} visibleTitle={false} />
			</ThemeProvider>
		);
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

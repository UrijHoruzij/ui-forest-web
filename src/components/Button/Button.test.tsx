import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button, ThemeProvider } from '../';

describe('Button component', () => {
	test('Render button', () => {
		const text = 'Button';
		const component = (
			<ThemeProvider>
				<Button>{text}</Button>
			</ThemeProvider>
		);
		render(component);
		expect(screen.getByText(text)).toHaveAttribute('type');
		expect(screen.getByText(text)).toBeInTheDocument();
	});
	test('Render button disabled', () => {
		const text = 'Button disabled';
		const component = (
			<ThemeProvider>
				<Button disabled>{text}</Button>
			</ThemeProvider>
		);
		render(component);
		expect(screen.getByText(text)).toHaveAttribute('disabled');
		expect(screen.getByText(text)).toBeInTheDocument();
	});
	test('Render button snapshot', () => {
		const text = 'Button';
		const component = (
			<ThemeProvider>
				<Button>{text}</Button>
			</ThemeProvider>
		);
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

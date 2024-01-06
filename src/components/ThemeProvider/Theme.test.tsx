import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from '..';

describe('ThemeProvider component', () => {
	test('Render themeProvider snapshot', () => {
		const component = <ThemeProvider />;
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Grid, ThemeProvider } from '../';

describe('Container component', () => {
	test('Render container snapshot', () => {
		const component = (
			<ThemeProvider>
				<Grid></Grid>
			</ThemeProvider>
		);
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

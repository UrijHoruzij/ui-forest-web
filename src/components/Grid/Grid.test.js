import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Grid, ThemeProvider } from '../';

describe('Grid component', () => {
	test('Render grid snapshot', () => {
		const component = (
			<ThemeProvider>
				<Grid>
					<Grid.Row>
						<Grid.Column col={12}></Grid.Column>
					</Grid.Row>
				</Grid>
			</ThemeProvider>
		);
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Tags, ThemeProvider } from '../';

describe('Tags component', () => {
	test('Render tags snapshot', () => {
		const component = (
			<ThemeProvider>
				<Tags>
					<p>JS</p>
					<p>HTML</p>
					<p>CSS</p>
				</Tags>
			</ThemeProvider>
		);
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ZoomImage, ThemeProvider } from '../';

describe('ZoomImage component', () => {
	test('Render zoomImage snapshot', () => {
		const component = (
			<ThemeProvider>
				<ZoomImage src="https://images.unsplash.com/photo-1658696649632-f9abf30cdc98" alt="Zoom image" />
			</ThemeProvider>
		);
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

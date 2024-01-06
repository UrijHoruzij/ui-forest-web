import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Image, ThemeProvider } from '..';

describe('Image component', () => {
	test('Render image snapshot', () => {
		const component = (
			<ThemeProvider>
				<Image image="http://source.unsplash.com/S3eqr293Vho/600x1200" />
			</ThemeProvider>
		);
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

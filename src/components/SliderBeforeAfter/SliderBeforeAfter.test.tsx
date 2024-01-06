import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SliderBeforeAfter, ThemeProvider } from '..';

describe('SliderBeforeAfter component', () => {
	test('Render sliderBeforeAfter snapshot', () => {
		const component = (
			<ThemeProvider>
				<SliderBeforeAfter
					width={900}
					height={600}
					urlFirstImage="https://i.imgur.com/s08MkXC.jpg"
					urlSecondImage="https://i.imgur.com/PfIWek4.jpg"
				/>
			</ThemeProvider>
		);
		render(component);
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

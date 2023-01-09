import React from 'react';
import { SliderBeforeAfter } from '../';

export default {
	title: 'Components/SliderBeforeAfter',
	component: SliderBeforeAfter,
};

export const Default = () => (
	<SliderBeforeAfter
		width={900}
		height={600}
		urlFirstImage="https://i.imgur.com/s08MkXC.jpg"
		urlSecondImage="https://i.imgur.com/PfIWek4.jpg"></SliderBeforeAfter>
);
export const OneImage = () => (
	<SliderBeforeAfter width={900} height={600} urlFirstImage="https://i.imgur.com/s08MkXC.jpg"></SliderBeforeAfter>
);

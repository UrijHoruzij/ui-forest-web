import React from 'react';
import { SliderBeforeAfter } from '../';

export default {
	title: 'Components/SliderBeforeAfter',
	component: SliderBeforeAfter,
};

export const Default = () => (
	<SliderBeforeAfter
		size={400}
		urlFirstImage="https://i.imgur.com/s08MkXC.jpg"
		urlSecondImage="https://i.imgur.com/PfIWek4.jpg"></SliderBeforeAfter>
);
export const OneImage = () => (
	<SliderBeforeAfter size={400} urlFirstImage="https://i.imgur.com/s08MkXC.jpg"></SliderBeforeAfter>
);

export const AspectRatioImage = () => (
	<SliderBeforeAfter size={400} aspectRatio="16/9" urlFirstImage="https://i.imgur.com/s08MkXC.jpg"></SliderBeforeAfter>
);
const imgFirst = (props) => <img alt="111" src="https://i.imgur.com/s08MkXC.jpg" {...props} />;
const imgSecond = (props) => <img alt="222" src="https://i.imgur.com/PfIWek4.jpg" {...props} />;

export const ComponentsImage = () => (
	<SliderBeforeAfter size={400} componentAfter={imgFirst} componentBefore={imgSecond}></SliderBeforeAfter>
);

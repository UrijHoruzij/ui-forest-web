import React from 'react';
import { ZoomImage } from '../';

export default {
	title: 'Components/ZoomImage',
	component: ZoomImage,
	argTypes: {
		src: { control: 'file' },
	},
};

export const Default = () => (
	<ZoomImage src="https://images.unsplash.com/photo-1658696649632-f9abf30cdc98" alt="Zoom image" />
);

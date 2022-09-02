import React from 'react';
import { Image } from '../';

export default {
	title: 'Components/Image',
	component: Image,
	argTypes: {
		width: {
			control: { type: 'number' },
		},
		height: {
			control: { type: 'number' },
		},
	},
};

export const Default = () => <Image image="http://source.unsplash.com/S3eqr293Vho/600x1200" />;

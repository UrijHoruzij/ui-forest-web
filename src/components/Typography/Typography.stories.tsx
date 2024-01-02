import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../';

const meta: Meta<typeof Typography> = {
	component: Typography,
	// argTypes: {
	// 	color: { control: 'color' },
	// },
	// parameters: {
	// 	colorPicker: {
	// 		applyColorTo: ['color'],
	// 	},
	// },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const H1: Story = {
	args: {
		type: 'h1',
		children: 'Заголовок 1',
	},
};
export const H2: Story = {
	args: {
		type: 'h2',
		children: 'Заголовок 2',
	},
};
export const H3: Story = {
	args: {
		type: 'h3',
		children: 'Заголовок 3',
	},
};
export const H4: Story = {
	args: {
		type: 'h4',
		children: 'Заголовок 4',
	},
};
export const H5: Story = {
	args: {
		type: 'h5',
		children: 'Заголовок 5',
	},
};
export const H6: Story = {
	args: {
		type: 'h6',
		children: 'Заголовок 6',
	},
};
export const Text: Story = {
	args: {
		type: 'text',
		children: 'Текст',
	},
};
export const Caption: Story = {
	args: {
		type: 'caption',
		children: 'Подпись',
	},
};

import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/components/';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<ThemeProvider theme="light">
				<Story />
			</ThemeProvider>
		),
	],
};

export default preview;

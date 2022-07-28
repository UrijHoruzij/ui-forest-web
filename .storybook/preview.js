import light from '../src/components/ThemeProvider/themes/light.module.css';
import dark from '../src/components/ThemeProvider/themes/dark.module.css';

export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<Story />
		</>
	),
];
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	themes: {
		default: 'light',
		list: [
			{ name: 'light', class: [light.root], color: '#f5f5f5' },
			{ name: 'dark', class: [dark.root], color: '#333333' },
		],
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

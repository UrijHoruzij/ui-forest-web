import { create } from '@storybook/theming';
import colors from '../src/themes/config/colors';
export default create({
	base: 'light',

	colorPrimary: colors.cyan.cyan7,
	colorSecondary: colors.cyan.cyan7,

	// UI
	appBg: colors.gray.gray1,
	appContentBg: colors.gray.gray1,
	appBorderColor: colors.gray.gray3,
	appBorderRadius: 4,

	// Typography
	fontBase: '"Arial", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: colors.gray.gray9,
	textInverseColor: colors.gray.gray1,

	// Toolbar default and active colors
	barTextColor: colors.gray.gray9,
	barSelectedColor: colors.cyan.cyan9,
	barBg: colors.gray.gray2,

	// Form colors
	inputBg: colors.gray.gray2,
	inputBorder: colors.gray.gray5,
	inputTextColor: colors.gray.gray9,
	inputBorderRadius: 4,

	brandTitle: 'UI Forest',
	// brandUrl: "https://example.com",
	// brandImage: "https://place-hold.it/350x150",
});

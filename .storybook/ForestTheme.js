import { create } from '@storybook/theming';
import colors from '../src/themes/config/colors';
export default create({
	base: 'light',

	colorPrimary: colors.teal.teal7,
	colorSecondary: colors.teal.teal7,

	// UI
	appBg: colors.grey.grey1,
	appContentBg: colors.grey.grey1,
	appBorderColor: colors.grey.grey3,
	appBorderRadius: 4,

	// Typography
	fontBase: '"Arial", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: colors.grey.grey10,
	textInverseColor: colors.grey.grey1,

	// Toolbar default and active colors
	barTextColor: colors.grey.grey10,
	barSelectedColor: colors.teal.teal7,
	barBg: colors.grey.grey2,

	// Form colors
	inputBg: colors.grey.grey2,
	inputBorder: colors.grey.grey5,
	inputTextColor: colors.grey.grey10,
	inputBorderRadius: 4,

	brandTitle: 'UI Forest',
	// brandUrl: "https://example.com",
	// brandImage: "https://place-hold.it/350x150",
});

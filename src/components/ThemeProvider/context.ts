import { createContext } from 'react';
import { light, dark } from './themes/';
const defaultThemes = {
	light: light.root,
	dark: dark.root,
};

const ThemeContext = createContext({
	theme: 'light',
	themes: defaultThemes,
});
export default ThemeContext;

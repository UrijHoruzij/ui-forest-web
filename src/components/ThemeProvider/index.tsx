import React, { FC, useState, createContext } from 'react';
import { light, dark } from './themes';
import { ThemeProps } from './Theme.types';

const defaultThemes: Record<string, string> = {
	light: light.root,
	dark: dark.root,
};

const ThemeProvider: FC<ThemeProps> = (props) => {
	const { theme, themes = defaultThemes, children } = props;
	const [activTheme, setActivTheme] = useState(themes[theme]);
	const changeTheme = (theme: any) => {
		setActivTheme(theme);
	};
	return (
		<ThemeContext.Provider value={{ themes, changeTheme }}>
			<div className={activTheme}>{children}</div>;
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

export const ThemeContext = createContext<any | null>(null);

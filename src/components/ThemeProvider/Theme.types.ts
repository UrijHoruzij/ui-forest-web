import { ReactNode } from 'react';

export interface ThemeProps {
	theme: string;
	themes?: Record<string, string>;
	children?: ReactNode;
}

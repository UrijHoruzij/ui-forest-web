import { CSSProperties, ReactNode } from 'react';

export interface NotificationProps {
	className?: string;
	style?: CSSProperties;
	type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';
}

export interface NotificationProviderProps {
	children?: ReactNode;
}

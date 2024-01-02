import { CSSProperties, ReactNode } from 'react';

export interface NotificationProps {
	id: string;
	title: string;
	message: string;
	dispatch: (e: any) => void;
	className?: string;
	style?: CSSProperties;
	type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';
}

export interface NotificationProviderProps {
	children?: ReactNode;
}

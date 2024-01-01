import { FC, CSSProperties, ChangeEventHandler, KeyboardEvent } from 'react';

export interface InputProps {
	id?: string;
	value: any;
	placeholder?: string;
	type: 'email' | 'password' | 'tel' | 'text' | 'url';
	name?: string;
	help?: string;
	className?: string;
	size: 'small' | 'medium' | 'large';
	status: 'error' | 'success' | 'default';
	style?: CSSProperties;
	onChange?: ChangeEventHandler;
	visibleTitle?: boolean;
	disabled?: boolean;
	onPressEnter?: KeyboardEvent;
}

export interface InputComposition {
	Textarea: FC<InputProps>;
	Password: FC<InputProps>;
}

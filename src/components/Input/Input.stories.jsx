import React, { useState } from 'react';
import { Input } from '../';

const Textarea = Input.Textarea;
const Password = Input.Password;

export default {
	title: 'Components/Input',
	component: Input,
	subcomponents: { Textarea, Password },
};

export const _Default = () => {
	const [state, setState] = useState('');
	return (
		<Input
			type="text"
			value={state}
			placeholder="Логин"
			name="login"
			onChange={(e) => {
				setState(e.target.value);
			}}
		/>
	);
};

export const _Success = () => {
	const [state, setState] = useState('');
	return (
		<Input
			type="text"
			value={state}
			placeholder="Логин"
			name="login"
			status="success"
			onChange={(e) => {
				setState(e.target.value);
			}}
		/>
	);
};

export const _Error = () => {
	const [state, setState] = useState('');
	return (
		<Input
			type="text"
			value={state}
			placeholder="Логин"
			name="login"
			help="Неправильный пароль"
			status="error"
			onChange={(e) => {
				setState(e.target.value);
			}}
		/>
	);
};

export const _HiddenTitle = () => {
	const [state, setState] = useState('');
	return (
		<Input
			type="text"
			value={state}
			placeholder="Логин"
			name="login"
			onChange={(e) => {
				setState(e.target.value);
			}}
			visibleTitle={false}
		/>
	);
};

export const _Textarea = () => {
	const [state, setState] = useState('');
	return (
		<Input.Textarea
			value={state}
			placeholder="Логин"
			name="login"
			onChange={(e) => {
				setState(e.target.value);
			}}
			visibleTitle={false}
		/>
	);
};

export const _Password = () => {
	const [state, setState] = useState('');
	return (
		<Input.Password
			value={state}
			placeholder="Пароль"
			name="password"
			onChange={(e) => {
				setState(e.target.value);
			}}
			visibleTitle={false}
		/>
	);
};

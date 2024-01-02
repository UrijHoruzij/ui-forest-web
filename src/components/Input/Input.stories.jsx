import { useState } from 'react';
import { Input } from '..';

const TextareaComponent = Input.Textarea;
const PasswordComponent = Input.Password;

export default {
	title: 'Components/Input',
	component: Input,
	subcomponents: { TextareaComponent, PasswordComponent },
};

export const Default = () => {
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

export const Success = () => {
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

export const Error = () => {
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

export const HiddenTitle = () => {
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

export const Textarea = () => {
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

export const Password = () => {
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

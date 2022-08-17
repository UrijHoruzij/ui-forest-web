import React from 'react';
import { Input } from '../';

const Textarea = Input.Textarea;

export default {
	title: 'Components/Input',
	component: Input,
	subcomponents: { Textarea },
};

export const Default = () => <Input type="text" value="" placeholder="Логин" name="login" onChange={() => {}} />;
export const Success = () => (
	<Input type="text" value="" placeholder="Логин" name="login" status="success" onChange={() => {}} />
);
export const _Error = () => (
	<Input
		type="text"
		value=""
		placeholder="Логин"
		name="login"
		help="Неправильный пароль"
		status="error"
		defaultValue="login"
		onChange={() => {}}
	/>
);
export const HiddenTitle = () => (
	<Input type="text" value="" placeholder="Логин" name="login" onChange={() => {}} visibleTitle={false} />
);

export const _Textarea = () => (
	<Input.Textarea value="" placeholder="Логин" name="login" onChange={() => {}} visibleTitle={false} />
);

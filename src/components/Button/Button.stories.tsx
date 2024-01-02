import { Button } from '..';

export default {
	title: 'Components/Button',
	component: Button,
};

const Template = (args) => (
	<>
		<Button {...args} size="small" /> <Button {...args} size="medium" /> <Button {...args} size="large" />
	</>
);

export const Primary = Template.bind({});
Primary.args = {
	variant: 'primary',
	children: 'Button',
};
export const Secondary = Template.bind({});
Secondary.args = {
	variant: 'secondary',
	children: 'Button',
};

export const Text = Template.bind({});
Text.args = {
	variant: 'text',
	children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
	variant: 'text',
	children: 'Button',
	disabled: true,
};
export const Danger = Template.bind({});
Danger.args = {
	variant: 'text',
	children: 'Button',
	danger: true,
};

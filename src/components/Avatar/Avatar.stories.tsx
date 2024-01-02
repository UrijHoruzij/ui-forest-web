import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../';

const meta: Meta<typeof Avatar> = {
	component: Avatar,
	// argTypes: {
	// 	color: { control: 'color' },
	// },
	// parameters: {
	// 	colorPicker: {
	// 		applyColorTo: ['color'],
	// 	},
	// },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
	args: {
		avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
		fullname: 'Helena Lopes',
		isOnline: true,
		size: 'small',
	},
};
export const Medium: Story = {
	args: {
		avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
		fullname: 'Helena Lopes',
		isOnline: true,
		size: 'medium',
	},
};
export const Large: Story = {
	args: {
		avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
		fullname: 'Helena Lopes',
		isOnline: true,
		size: 'large',
	},
};
export const SymbolSmall: Story = {
	args: {
		fullname: 'Helena Lopes',
		isOnline: true,
		size: 'small',
	},
};
export const SymbolMedium: Story = {
	args: {
		fullname: 'Helena Lopes',
		isOnline: true,
		size: 'medium',
	},
};
export const SymbolLarge: Story = {
	args: {
		fullname: 'Helena Lopes',
		isOnline: true,
		size: 'large',
	},
};

type StoryGroup = StoryObj<typeof Avatar.Group>;
export const Group: StoryGroup = {
	args: {
		users: [
			// @ts-ignore
			<Avatar
				key={1}
				size="small"
				avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
				fullname="Helena Lopes"
			/>,
			// @ts-ignore
			<Avatar
				key={2}
				size="small"
				avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
				fullname="Helena Lopes"
			/>,
			// @ts-ignore
			<Avatar
				key={3}
				size="small"
				avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
				fullname="Helena Lopes"
			/>,
		],
	},
};

// const img = (props) => <img alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9" {...props} />;
// export const ComponentSmall = () => <Avatar component={img} fullname="Helena Lopes" isOnline size="small" />;
// export const ComponentMedium = () => <Avatar component={img} fullname="Helena Lopes" isOnline size="medium" />;
// export const ComponentLarge = () => <Avatar component={img} fullname="Helena Lopes" isOnline size="large" />;
// export const Group = () => (
// 	<Avatar.Group
// 		users={[
// 			<Avatar key={1} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={2} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={3} component={img} fullname="Helena Lopes" />,
// 		]}
// 	/>
// );
// export const Group_5 = () => (
// 	<Avatar.Group
// 		users={[
// 			<Avatar key={1} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={2} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={3} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={4} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={5} component={img} fullname="Helena Lopes" />,
// 		]}
// 	/>
// );
// export const Group_more_5 = () => (
// 	<Avatar.Group
// 		users={[
// 			<Avatar key={1} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={2} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={3} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={4} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={5} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={6} component={img} fullname="Helena Lopes" />,
// 		]}
// 	/>
// );
// export const Add_Group = () => (
// 	<Avatar.Group
// 		add
// 		users={[
// 			<Avatar key={1} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={2} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={3} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={4} component={img} fullname="Helena Lopes" />,
// 			<Avatar key={5} component={img} fullname="Helena Lopes" />,
// 		]}
// 	/>
// );

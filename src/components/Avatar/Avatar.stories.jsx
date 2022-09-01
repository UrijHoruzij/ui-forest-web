import React from 'react';
import { Avatar } from '../';

export default {
	title: 'Components/Avatar',
	component: Avatar,
};

export const Small = () => (
	<Avatar
		avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
		fullname="Helena Lopes"
		isOnline
		size="small"
	/>
);
export const Medium = () => (
	<Avatar
		avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
		fullname="Helena Lopes"
		isOnline
		size="medium"
	/>
);
export const Large = () => (
	<Avatar
		avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
		fullname="Helena Lopes"
		isOnline
		size="large"
	/>
);
export const SymbolSmall = () => <Avatar fullname="Helena Lopes" isOnline size="small" />;
export const SymbolMedium = () => <Avatar fullname="Helena Lopes" isOnline size="medium" />;
export const SymbolLarge = () => <Avatar fullname="Helena Lopes" isOnline size="large" />;
const img = (props) => <img alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9" {...props} />;
export const ComponentSmall = () => <Avatar component={img} fullname="Helena Lopes" isOnline size="small" />;
export const ComponentMedium = () => <Avatar component={img} fullname="Helena Lopes" isOnline size="medium" />;
export const ComponentLarge = () => <Avatar component={img} fullname="Helena Lopes" isOnline size="large" />;
export const Group = () => (
	<Avatar.Group
		users={[
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
		]}></Avatar.Group>
);
export const Group_5 = () => (
	<Avatar.Group
		users={[
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
		]}></Avatar.Group>
);
export const Group_more_5 = () => (
	<Avatar.Group
		users={[
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
		]}></Avatar.Group>
);
export const Add_Group = () => (
	<Avatar.Group
		add
		users={[
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
			<Avatar component={img} fullname="Helena Lopes" />,
		]}></Avatar.Group>
);

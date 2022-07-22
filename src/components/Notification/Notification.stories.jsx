import React from 'react';
import { Notification, NotificationProvider, useNotification } from '../';

export default {
	title: 'Components/Notification',
	component: Notification,
	decorators: [
		(Story) => (
			<NotificationProvider>
				<Story />
			</NotificationProvider>
		),
	],
};

export const Status_Success = () => {
	const dispatch = useNotification();
	const handleNewNotification = () => {
		dispatch({
			type: 'SUCCESS',
			message: 'Error message',
			title: 'Successful Request',
		});
	};
	return <button onClick={handleNewNotification}>Add Notification</button>;
};
export const Status_Error = () => {
	const dispatch = useNotification();
	const handleNewNotification = () => {
		dispatch({
			type: 'ERROR',
			message: 'Error message',
			title: 'Successful Request',
		});
	};
	return <button onClick={handleNewNotification}>Add Notification</button>;
};
export const Status_Warning = () => {
	const dispatch = useNotification();
	const handleNewNotification = () => {
		dispatch({
			type: 'WARNING',
			message: 'Error message',
			title: 'Successful Request',
		});
	};
	return <button onClick={handleNewNotification}>Add Notification</button>;
};
export const Status_Info = () => {
	const dispatch = useNotification();
	const handleNewNotification = () => {
		dispatch({
			type: 'INFO',
			message: 'Error message',
			title: 'Successful Request',
		});
	};
	return <button onClick={handleNewNotification}>Add Notification</button>;
};

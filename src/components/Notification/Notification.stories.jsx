import { Notification, NotificationProvider, useNotification } from '..';

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
export const StatusError = () => {
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
export const StatusWarning = () => {
	const dispatch = useNotification();
	const handleNewNotification = () => {
		dispatch({
			type: 'WARNING',
			message: 'Error message',
			title: 'Successful Request',
		});
	};
	return (
		<button type="button" onClick={handleNewNotification}>
			Add Notification
		</button>
	);
};
export const StatusInfo = () => {
	const dispatch = useNotification();
	const handleNewNotification = () => {
		dispatch({
			type: 'INFO',
			message: 'Error message',
			title: 'Successful Request',
		});
	};
	return (
		<button type="button" onClick={handleNewNotification}>
			Add Notification
		</button>
	);
};

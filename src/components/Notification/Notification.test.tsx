// import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { NotificationProvider, useNotification, ThemeProvider } from '..';

// describe('Notification component', () => {
// 	test('Render notification snapshot', () => {
// 		const dispatch = useNotification();
// 		const handleNewNotificationSuccess = () => {
// 			dispatch({
// 				type: 'SUCCESS',
// 				message: 'Error message',
// 				title: 'Successful Request',
// 			});
// 		};
// 		const handleNewNotificationError = () => {
// 			dispatch({
// 				type: 'ERROR',
// 				message: 'Error message',
// 				title: 'Successful Request',
// 			});
// 		};
// 		const handleNewNotificationWarning = () => {
// 			dispatch({
// 				type: 'WARNING',
// 				message: 'Error message',
// 				title: 'Successful Request',
// 			});
// 		};
// 		const handleNewNotificationInfo = () => {
// 			dispatch({
// 				type: 'INFO',
// 				message: 'Error message',
// 				title: 'Successful Request',
// 			});
// 		};
// 		const component = (
// 			<ThemeProvider>
// 				<NotificationProvider>
// 					<button onClick={handleNewNotificationSuccess}>Add Notification</button>
// 					<button onClick={handleNewNotificationError}>Add Notification</button>
// 					<button onClick={handleNewNotificationWarning}>Add Notification</button>
// 					<button onClick={handleNewNotificationInfo}>Add Notification</button>
// 				</NotificationProvider>
// 			</ThemeProvider>
// 		);
// 		render(component);
// 		const tree = renderer.create(component).toJSON();
// 		expect(tree).toMatchSnapshot();
// 	});
// });

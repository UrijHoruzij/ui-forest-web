import { FC, useReducer } from 'react';
import { NotificationProviderProps } from './Notification.types';
import Notification from './notification';
import NotificationContext from './context';
import styles from './Notification.module.css';

// Dispatch<any>;
const NotificationProvider: FC<NotificationProviderProps> = (props) => {
	const [state, dispatch] = useReducer((state: any, action: any) => {
		switch (action.type) {
			case 'ADD_NOTIFICATION':
				return [...state, { ...action.payload }];
			case 'REMOVE_NOTIFICATION':
				return state.filter((el: any) => el.id !== action.id);
			default:
				return state;
		}
	}, []);
	return (
		<NotificationContext.Provider value={dispatch}>
			<div className={styles.notification__wrapper}>
				{state.map((note: any) => (
					<Notification dispatch={dispatch} key={note.id} {...note} />
				))}
			</div>
			{props.children}
		</NotificationContext.Provider>
	);
};

export default NotificationProvider;

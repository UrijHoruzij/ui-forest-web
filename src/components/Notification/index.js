import { useReducer } from 'react';
import Notification from './notification';
import NotificationContext from './context';
import styles from './Notification.module.css';

const NotificationProvider = (props) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'ADD_NOTIFICATION':
				return [...state, { ...action.payload }];
			case 'REMOVE_NOTIFICATION':
				return state.filter((el) => el.id !== action.id);
			default:
				return state;
		}
	}, []);
	return (
		<NotificationContext.Provider value={dispatch}>
			<div className={styles.notification__wrapper}>
				{state.map((note) => (
					<Notification dispatch={dispatch} key={note.id} {...note} />
				))}
			</div>
			{props.children}
		</NotificationContext.Provider>
	);
};

export default NotificationProvider;

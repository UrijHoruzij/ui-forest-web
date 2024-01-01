import { FC, useState, useEffect, useRef } from 'react';
import { NotificationProps } from './Notification.types';
import { Typography } from '../';
import styles from './Notification.module.css';

const Notification: FC<NotificationProps> = (props) => {
	const { type } = props;
	const [exit, setExit] = useState(false);
	const [width, setWidth] = useState(0);
	const timerRef = useRef<NodeJS.Timer | null>(null);
	// const [intervalID, setIntervalID] = useState<NodeJS.Timeout | undefined>();
	const handleStartTimer = () => {
		timerRef.current = setInterval(() => {
			setWidth((prev) => {
				if (prev < 100) {
					return prev + 0.5;
				}
				if (timerRef.current) clearInterval(timerRef.current);
				return prev;
			});
		}, 20);
		// setIntervalID(id);
	};
	const handlePauseTimer = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
	};
	const handleCloseNotification = () => {
		handlePauseTimer();
		setExit(true);
		setTimeout(() => {
			props.dispatch({
				type: 'REMOVE_NOTIFICATION',
				id: props.id,
			});
		}, 400);
	};
	const handleClose = () => {
		handlePauseTimer();
		setExit(true);
		props.dispatch({
			type: 'REMOVE_NOTIFICATION',
			id: props.id,
		});
	};
	useEffect(() => {
		if (width === 100) {
			handleCloseNotification();
		}
	}, [width]);
	useEffect(() => {
		handleStartTimer();
	}, []);
	return (
		<div
			onMouseEnter={handlePauseTimer}
			onMouseLeave={handleStartTimer}
			className={[
				styles.notification__item,
				{
					[styles.notification__success]: type === 'SUCCESS',
					[styles.notification__error]: type === 'ERROR',
					[styles.notification__warring]: type === 'WARNING',
					[styles.notification__info]: type === 'INFO',
					[styles.notification__exit]: exit,
				},
			].join(' ')}
			{...props}>
			<div className={styles.notification__border}></div>
			<div className={styles.notification__content}>
				<Typography color="text" type="h6">
					{props.title}
				</Typography>
				<Typography color="text" type="text">
					{props.message}
				</Typography>
			</div>
			<div className={styles.notification__close} onClick={(e) => handleClose()}>
				<div className={styles.notification__closeIcon}></div>
			</div>
			<div className={styles.notification__bar} style={{ width: `${100 - width}%` }} />
		</div>
	);
};

// Notification.defaultProps = {
// 	type: 'SUCCESS',
// };
export default Notification;

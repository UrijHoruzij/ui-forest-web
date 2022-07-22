import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography } from '../';
import styles from './Notification.module.css';

const Notification = (props) => {
	const { type } = props;
	const [exit, setExit] = useState(false);
	const [width, setWidth] = useState(0);
	const [intervalID, setIntervalID] = useState(null);
	const handleStartTimer = () => {
		const id = setInterval(() => {
			setWidth((prev) => {
				if (prev < 100) {
					return prev + 0.5;
				}
				clearInterval(id);
				return prev;
			});
		}, 20);
		setIntervalID(id);
	};
	const handlePauseTimer = () => {
		clearInterval(intervalID);
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
			className={classNames(styles.notification__item, {
				[styles.notification__success]: type === 'SUCCESS',
				[styles.notification__error]: type === 'ERROR',
				[styles.notification__warring]: type === 'WARNING',
				[styles.notification__info]: type === 'INFO',
				[styles.notification__exit]: exit,
			})}
			{...props}>
			<div className={styles.notification__border}></div>
			<div className={styles.notification__content}>
				<Typography type="h6">{props.title}</Typography>
				<Typography type="text">{props.message}</Typography>
			</div>
			<div className={styles.notification__close} onClick={(e) => handleClose()}>
				<div className={styles.notification__closeIcon}></div>
			</div>
			<div className={styles.notification__bar} style={{ width: `${100 - width}%` }} />
		</div>
	);
};
Notification.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	type: PropTypes.oneOf(['SUCCESS', 'ERROR', 'WARNING', 'INFO']),
};

Notification.defaultProps = {
	type: 'SUCCESS',
};
export default Notification;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Avatar.module.css';
import { changeSizeContainer, changeSize, changeSizeSymbol } from './sizes';

const AddButton = ({ users, onAdd }) => (
	<div className={classNames(styles.wrapper, changeSizeContainer(users[0].props.size))}>
		<div className={classNames(styles.add, changeSize(users[0].props.size))} onAdd={onAdd}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					className={styles.add__icon}
					d="M9.14286 9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286Z"
				/>
			</svg>
		</div>
	</div>
);
const Group = ({ users, add, onAdd }) => {
	return (
		<div className={styles.group}>
			{add ? (
				<>
					{users.length < 5 ? (
						<>
							{users.map((user) => user)}
							<AddButton users={users} onAdd={onAdd} />
						</>
					) : (
						<>
							{users.map((user, index) => (index < 4 ? user : null))}
							<AddButton users={users} onAdd={onAdd} />
						</>
					)}
				</>
			) : (
				<>
					{users.length > 5 ? (
						<>
							{users.map((user, index) => (index < 4 ? user : null))}
							<div
								className={classNames(
									styles.symbol,
									changeSizeSymbol(users[0].props.size),
									styles.wrapper,
									changeSizeContainer(users[0].props.size),
								)}>
								+{users.length - 4}
							</div>
						</>
					) : (
						<>{users.map((user) => user)}</>
					)}
				</>
			)}
		</div>
	);
};
Group.propTypes = {
	users: PropTypes.array,
	add: PropTypes.bool,
	onAdd: PropTypes.func,
};
Group.defaultProps = {
	add: false,
};
export default Group;

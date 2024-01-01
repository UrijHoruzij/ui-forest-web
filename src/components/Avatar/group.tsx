import { FC } from 'react';
import styles from './Avatar.module.css';
import { changeSizeContainer, changeSize, changeSizeSymbol } from './sizes';
import { GroupProps, AddButtonProps } from './Avatar.types';

const AddButton: FC<AddButtonProps> = ({ users, onAdd }) => (
	<div className={[styles.wrapper, changeSizeContainer(users[0].size)].join(' ')}>
		<div className={[styles.add, changeSize(users[0].size)].join(' ')} onClick={onAdd}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					className={styles.add__icon}
					d="M9.14286 9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286Z"
				/>
			</svg>
		</div>
	</div>
);
const Group: FC<GroupProps> = ({ users, add, onAdd }) => {
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
								className={[
									styles.symbol,
									changeSizeSymbol(users[0].size),
									styles.wrapper,
									changeSizeContainer(users[0].size),
								].join(' ')}>
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

export default Group;

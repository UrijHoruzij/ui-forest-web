import { FC } from 'react';
import { InputProps } from './Input.types';
import styles from './Input.module.css';
import InputContainer from './container';

const statusMap: Record<string, string> = {
	error: styles.error,
	success: styles.success,
};

const changeSize = (size: any) => {
	switch (size) {
		case 'small':
			return styles.small;
		case 'medium':
			return styles.medium;
		case 'large':
			return styles.large;
		default:
			return styles.medium;
	}
};

const Textarea: FC<InputProps> = (props) => {
	const { id, name, status, size } = props;
	return (
		<InputContainer {...props}>
			<textarea
				className={[styles.input, statusMap[status], changeSize(size)].join(' ')}
				value={props.value}
				placeholder={props.placeholder}
				name={props.name}
				style={props.style}
				onChange={props.onChange}
				disabled={props.disabled}
				// onPressEnter={props.onPressEnter}
				id={id || name}
			/>
			<div className={styles.container__focus} />
		</InputContainer>
	);
};

// Textarea.defaultProps = {
// 	status: 'default',
// 	size: 'medium',
// 	visibleTitle: true,
// };

export default Textarea;

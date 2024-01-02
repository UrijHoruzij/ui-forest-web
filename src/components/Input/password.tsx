import { FC, useState } from 'react';
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

const Password: FC<InputProps> = (props) => {
	const { id, name, status, size } = props;
	const [type, setType] = useState('password');
	const changeType = () => {
		type === 'text' ? setType('password') : setType('text');
	};
	return (
		<InputContainer {...props}>
			<input
				className={[styles.input, statusMap[status], changeSize(size), props.className].join(' ')}
				value={props.value}
				placeholder={props.placeholder}
				name={props.name}
				style={props.style}
				onChange={props.onChange}
				disabled={props.disabled}
				// onPressEnter={props.onPressEnter}
				type={type}
				id={id || name}
			/>
			<div className={styles.container__focus} />
			{type === 'password' ? (
				<svg
					onClick={changeType}
					className={styles.password__icon}
					width="15"
					height="11"
					viewBox="0 0 15 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M7.5 10.999C6.26991 11.015 5.05253 10.7369 3.9405 10.1859C3.07852 9.74533 2.30449 9.13693 1.65975 8.39315C0.976824 7.62415 0.439101 6.72664 0.075 5.74806L0 5.49981L0.07875 5.25156C0.443111 4.27384 0.979677 3.37656 1.6605 2.60647C2.30501 1.86276 3.07878 1.25435 3.9405 0.813744C5.05253 0.26272 6.26991 -0.0153627 7.5 0.000654691C8.73009 -0.0153351 9.94746 0.262746 11.0595 0.813744C11.9215 1.25425 12.6955 1.86266 13.3403 2.60647C14.0245 3.37443 14.5624 4.27221 14.925 5.25156L15 5.49981L14.9213 5.74806C13.7447 8.95625 10.7806 11.0534 7.5 10.999ZM7.5 1.57184C4.9469 1.48804 2.60356 3.0449 1.58775 5.49981C2.6034 7.95486 4.94684 9.5118 7.5 9.42778C10.053 9.51136 12.3963 7.95457 13.4122 5.49981C12.3978 3.04371 10.0536 1.48627 7.5 1.57184ZM7.5 7.85659C6.41799 7.86409 5.48203 7.06892 5.26572 5.95842C5.04942 4.84791 5.6132 3.73224 6.61154 3.29517C7.60987 2.85809 8.76393 3.22169 9.36641 4.16313C9.96889 5.10456 9.85153 6.36088 9.08625 7.16213C8.66724 7.60619 8.09607 7.85625 7.5 7.85659Z" />
				</svg>
			) : (
				<svg
					onClick={changeType}
					className={styles.password__icon}
					width="15"
					height="14"
					viewBox="0 0 15 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M13.4775 14L10.9605 11.4442C9.87459 11.9462 8.69309 12.1992 7.5 12.1852C6.26991 12.2007 5.05253 11.9311 3.9405 11.3969C3.07851 10.9699 2.30448 10.3801 1.65975 9.65903C0.975369 8.9141 0.437473 8.04324 0.075 7.09329L0 6.85416L0.07875 6.6135C0.620858 5.20938 1.53319 3.98391 2.71575 3.07142L0.75 1.07534L1.80975 0L14.5365 12.9231L13.479 14H13.4775ZM3.777 4.14981C2.81844 4.83212 2.06149 5.76717 1.58775 6.85416C2.60356 9.234 4.9469 10.7433 7.5 10.662C8.28737 10.6686 9.07017 10.5398 9.81525 10.2812L8.46525 8.91041C8.16475 9.05998 7.83466 9.13811 7.5 9.13888C6.26059 9.13098 5.25778 8.11269 5.25 6.85416C5.25036 6.51356 5.32732 6.17754 5.475 5.87173L3.777 4.14981ZM13.389 9.60344L12.345 8.54409C12.7842 8.03986 13.1442 7.46985 13.4122 6.85416C12.3978 4.47316 10.0536 2.96334 7.5 3.04629C7.31475 3.04629 7.12875 3.05315 6.94875 3.06609L5.625 1.72039C6.24122 1.58653 6.86984 1.52041 7.5 1.52315C8.73009 1.50765 9.94746 1.77722 11.0595 2.31137C11.9215 2.73841 12.6955 3.32822 13.3403 4.04928C14.0243 4.79331 14.5622 5.66312 14.925 6.61198L15 6.85416L14.9213 7.09482C14.5701 8.02247 14.0506 8.87496 13.3898 9.60801L13.389 9.60344Z" />
				</svg>
			)}
		</InputContainer>
	);
};

// Password.defaultProps = {
// 	status: 'default',
// 	size: 'medium',
// 	visibleTitle: true,
// };

export default Password;

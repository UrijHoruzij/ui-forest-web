import {FC} from 'react';
import {ButtonProps} from './Button.types'
import styles from './Button.module.css';

const changeSize = (size:string) => {
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
const changeVariant = (variant:'primary'| 'secondary'| 'text') => {
	switch (variant) {
		case 'primary':
			return styles.primary;
		case 'secondary':
			return styles.secondary;
		case 'text':
			return styles.text;
	}
};

const Button: FC<ButtonProps> = (props) => {
	const { children, loading } = props;

	return (
		<button {...props} className={[
			props.className,
			styles.container,
			props.disabled? styles.disabled: undefined,
			props.danger ? styles.danger :undefined,
			changeSize(props.size),
			changeVariant(props.variant),
			props.className
		].join(' ')} >
			{/* {loading && <div className={styles.loading}></div>} */}
			{children}
		</button>
	);
};



// Button.defaultProps = {
// 	type: 'button',
// 	size: 'medium',
// 	// loading: false,
// 	danger: false,
// 	disabled: false,
// 	variant: 'secondary',
// };

export default Button;

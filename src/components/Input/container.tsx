import { FC } from 'react';
import { InputProps } from './Input.types';
import styles from './Input.module.css';

const InputContainer: FC<InputProps> = (props) => {
	const { id, placeholder, name, help, visibleTitle, className, children } = props;
	return (
		<div className={[className, styles.wrapper].join(' ')}>
			{visibleTitle ? (
				<label htmlFor={id ? id : name} className={styles.label}>
					{placeholder}
				</label>
			) : null}
			<div className={styles.container}>{children}</div>
			{help ? <div className={styles.help}>{help}</div> : null}
		</div>
	);
};

export default InputContainer;

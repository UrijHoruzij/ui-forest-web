import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

const InputContainer = (props) => {
	const { id, placeholder, name, status, help, visibleTitle, className, children } = props;
	return (
		<div className={classNames(className, styles.wrapper)}>
			{visibleTitle ? (
				<label htmlFor={id ? id : name} className={styles.label}>
					{placeholder}
				</label>
			) : null}
			<div className={styles.container}>
				{children}
				<div className={styles.container__focus}></div>
				{status === 'success' ? <div className={styles.container__success}></div> : null}
			</div>
			{help ? <div className={styles.help}>{help}</div> : null}
		</div>
	);
};

export default InputContainer;

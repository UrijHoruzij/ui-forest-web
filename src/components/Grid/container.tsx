import {FC} from 'react';
import {ContainerProps} from './Grid.types';
import styles from './Grid.module.css';

const Container:FC<ContainerProps> = (props) => {
	const { children } = props;
	return <div className={styles.container}>{children}</div>;
};


export default Container;

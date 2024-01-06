import { FC } from 'react';
import { RowProps } from './Grid.types';
import styles from './Grid.module.css';

const Row: FC<RowProps> = (props) => {
	const { children } = props;
	return <div className={styles.row}>{children}</div>;
};

export default Row;

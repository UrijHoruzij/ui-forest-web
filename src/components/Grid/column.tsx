import { FC } from 'react';
import { ColumnProps } from './Grid.types';
import styles from './Grid.module.css';

const colMap = {};
const changeCol = (col: number | undefined) => {
	switch (col) {
		case 1:
			return styles.col_1;
		case 2:
			return styles.col_2;
		case 3:
			return styles.col_3;
		case 4:
			return styles.col_4;
		case 5:
			return styles.col_5;
		case 6:
			return styles.col_6;
		case 7:
			return styles.col_7;
		case 8:
			return styles.col_8;
		case 9:
			return styles.col_9;
		case 10:
			return styles.col_10;
		case 11:
			return styles.col_11;
		case 12:
			return styles.col_12;
		default:
	}
};
const changeSm = (sm: number | undefined) => {
	switch (sm) {
		case 1:
			return styles.col_sm_1;
		case 2:
			return styles.col_sm_2;
		case 3:
			return styles.col_sm_3;
		case 4:
			return styles.col_sm_4;
		case 5:
			return styles.col_sm_5;
		case 6:
			return styles.col_sm_6;
		case 7:
			return styles.col_sm_7;
		case 8:
			return styles.col_sm_8;
		case 9:
			return styles.col_sm_9;
		case 10:
			return styles.col_sm_10;
		case 11:
			return styles.col_sm_11;
		case 12:
			return styles.col_sm_12;
		default:
	}
};
const changeMd = (md: number | undefined) => {
	switch (md) {
		case 1:
			return styles.col_md_1;
		case 2:
			return styles.col_md_2;
		case 3:
			return styles.col_md_3;
		case 4:
			return styles.col_md_4;
		case 5:
			return styles.col_md_5;
		case 6:
			return styles.col_md_6;
		case 7:
			return styles.col_md_7;
		case 8:
			return styles.col_md_8;
		case 9:
			return styles.col_md_9;
		case 10:
			return styles.col_md_10;
		case 11:
			return styles.col_md_11;
		case 12:
			return styles.col_md_12;
		default:
	}
};
const changeLg = (lg: number | undefined) => {
	switch (lg) {
		case 1:
			return styles.col_lg_1;
		case 2:
			return styles.col_lg_2;
		case 3:
			return styles.col_lg_3;
		case 4:
			return styles.col_lg_4;
		case 5:
			return styles.col_lg_5;
		case 6:
			return styles.col_lg_6;
		case 7:
			return styles.col_lg_7;
		case 8:
			return styles.col_lg_8;
		case 9:
			return styles.col_lg_9;
		case 10:
			return styles.col_lg_10;
		case 11:
			return styles.col_lg_11;
		case 12:
			return styles.col_lg_12;
		default:
	}
};
const changeXl = (xl: number | undefined) => {
	switch (xl) {
		case 1:
			return styles.col_xl_1;
		case 2:
			return styles.col_xl_2;
		case 3:
			return styles.col_xl_3;
		case 4:
			return styles.col_xl_4;
		case 5:
			return styles.col_xl_5;
		case 6:
			return styles.col_xl_6;
		case 7:
			return styles.col_xl_7;
		case 8:
			return styles.col_xl_8;
		case 9:
			return styles.col_xl_9;
		case 10:
			return styles.col_xl_10;
		case 11:
			return styles.col_xl_11;
		case 12:
			return styles.col_xl_12;
		default:
	}
};
const changeXxl = (xxl: number | undefined) => {
	switch (xxl) {
		case 1:
			return styles.col_xxl_1;
		case 2:
			return styles.col_xxl_2;
		case 3:
			return styles.col_xxl_3;
		case 4:
			return styles.col_xxl_4;
		case 5:
			return styles.col_xxl_5;
		case 6:
			return styles.col_xxl_6;
		case 7:
			return styles.col_xxl_7;
		case 8:
			return styles.col_xxl_8;
		case 9:
			return styles.col_xxl_9;
		case 10:
			return styles.col_xxl_10;
		case 11:
			return styles.col_xxl_11;
		case 12:
			return styles.col_xxl_12;
		default:
	}
};
const Column: FC<ColumnProps> = (props) => {
	const { children } = props;
	return (
		<div
			className={[
				props.className,
				changeCol(props?.col),
				changeSm(props?.sm),
				changeMd(props?.md),
				changeLg(props?.lg),
				changeXl(props?.xl),
				changeXxl(props?.xxl),
			].join(' ')}>
			{children}
		</div>
	);
};

export default Column;

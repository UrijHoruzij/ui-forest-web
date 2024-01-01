import styles from './Avatar.module.css';

export const changeSizeContainer = (size: any) => {
	switch (size) {
		case 'small':
			return styles.wrapper__small;
		case 'medium':
			return styles.wrapper__medium;
		case 'large':
			return styles.wrapper__large;
		default:
			return styles.wrapper__small;
	}
};
export const changeSize = (size: any) => {
	switch (size) {
		case 'small':
			return styles.image__small;
		case 'medium':
			return styles.image__medium;
		case 'large':
			return styles.image__large;
		default:
			return styles.image__small;
	}
};
export const changeSizeSymbol = (size: any) => {
	switch (size) {
		case 'small':
			return styles.symbol__small;
		case 'medium':
			return styles.symbol__medium;
		case 'large':
			return styles.symbol__large;
		default:
			return styles.symbol__small;
	}
};
export const changeSizeOnline = (size: any) => {
	switch (size) {
		case 'small':
			return styles.checkOnline__small;
		case 'medium':
			return styles.checkOnline__medium;
		case 'large':
			return styles.checkOnline__large;
		default:
			return styles.checkOnline__small;
	}
};

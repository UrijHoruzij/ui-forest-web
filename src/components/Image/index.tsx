import { FC } from 'react';
import { ImageProps } from './Image.types';
import styles from './Image.module.css';

const Image: FC<ImageProps> = ({ image, width, height }) => {
	return (
		<div style={{ width, height }} className={styles.wrapper}>
			<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
			<div className={styles.feather} style={{ backgroundImage: `url(${image})` }} />
		</div>
	);
};

// Image.defaultProps = {
// 	width: 400,
// 	height: 300,
// };

export default Image;

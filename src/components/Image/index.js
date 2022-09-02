import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';

const Image = ({ image, width, height }) => {
	return (
		<div style={{ width: width, height: height }} className={styles.wrapper}>
			<div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
			<div className={styles.feather} style={{ backgroundImage: `url(${image})` }}></div>
		</div>
	);
};

Image.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
};

Image.defaultProps = {
	width: 400,
	height: 300,
};

export default Image;

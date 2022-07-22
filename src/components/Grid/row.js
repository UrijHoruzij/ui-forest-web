import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.module.css';

const Row = (props) => {
	const { children } = props;
	return <div className={styles.row}>{children}</div>;
};

Row.propTypes = {
	children: PropTypes.node,
};
export default Row;

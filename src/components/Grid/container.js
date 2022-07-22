import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.module.css';

const Container = (props) => {
	const { children } = props;
	return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
	children: PropTypes.node,
};

export default Container;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tags.module.css';
import Tag from './tag';

const Tags = ({ children, tags }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

Tags.Tag = Tag;

Tags.propTypes = {
	children: PropTypes.node,
};

export default Tags;

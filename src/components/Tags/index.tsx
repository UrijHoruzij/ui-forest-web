import { FC } from 'react';
import { TagsComposition, TagsProps } from './Tags.types';
import styles from './Tags.module.css';
import Tag from './tag';

const Tags: FC<TagsProps> & TagsComposition = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

Tags.Tag = Tag;

export default Tags;

import { FC,useState } from 'react';
import {TagProps} from './Tags.types';
import styles from './Tags.module.css';

const Tag:FC<TagProps> = ({ className, children, activ, onClick }) => {
	const [state, setState] = useState(activ);
	const handleClick = () => {
		setState(!state);
		onClick();
	};
	return (
		<div
			className={classNames(className, styles.tag, {
				[styles.activ]: state,
			})}
			onClick={handleClick}>
			{children}
		</div>
	);
};

export default Tag;

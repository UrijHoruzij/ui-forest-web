import { FC, useState } from 'react';
import { TagProps } from './Tags.types';
import styles from './Tags.module.css';

const Tag: FC<TagProps> = (props) => {
	const { className, children, activ, onClick } = props;
	const [state, setState] = useState(activ);
	const handleClick = () => {
		setState(!state);
		onClick?.();
	};
	return (
		<div className={[className, styles.tag, state ? styles.activ : undefined].join(' ')} onClick={handleClick}>
			{children}
		</div>
	);
};

export default Tag;

import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Tags.module.css';

const Tag = ({ className, children, activ, onClick }) => {
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

Tag.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	activ: PropTypes.bool,
	onClick: PropTypes.func,
};
Tag.defaultProps = {
	activ: false,
	onClick: () => {},
};

export default Tag;

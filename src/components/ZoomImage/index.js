import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useEventListener from './useEventListener';
import styles from './ZoomImage.module.css';

const ZoomImage = (props) => {
	const { src, className, alt } = props;
	const [zoomed, setZoomed] = useState(false);
	const [fullWidth, setFullWidth] = useState(true);
	const ref = useRef(null);
	const toggle = () => setZoomed(!zoomed);
	const unzoom = () => setZoomed(false);
	const updateSizing = () => {
		if (ref.current) {
			const { offsetWidth: w, offsetHeight: h } = ref.current;
			const full = { w: window.innerWidth, h: window.innerHeight };
			const ratio = {
				w: w / full.w,
				h: h / full.h,
			};
			setFullWidth(ratio.w > ratio.h);
		}
	};
	useEventListener('wheel', unzoom);
	useEventListener('resize', updateSizing);
	return (
		<>
			<div className={classNames(styles.behind, { [styles.zoomed]: zoomed })} />
			<img
				src={src}
				className={classNames(
					className,
					styles.wrapper,
					{ [styles.wrapper__zommed]: zoomed },
					{ [styles.full__width]: fullWidth },
				)}
				onClick={toggle}
				onLoad={updateSizing}
				ref={ref}
				alt={alt}
				{...props}
			/>
		</>
	);
};

ZoomImage.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
};

export default ZoomImage;

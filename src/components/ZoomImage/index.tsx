import { FC, useState, useRef } from 'react';
import { ZoomImageProps } from './ZoomImage.types';
import useEventListener from './useEventListener';
import styles from './ZoomImage.module.css';

const ZoomImage: FC<ZoomImageProps> = (props) => {
	const { src, className, alt } = props;
	const [zoomed, setZoomed] = useState<boolean>(false);
	const [fullWidth, setFullWidth] = useState<boolean>(true);
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
			<div className={[styles.behind, zoomed ? styles.zoomed : undefined].join(' ')} />
			<img
				{...props}
				src={src}
				className={[
					className,
					styles.wrapper,
					zoomed ? styles.wrapper__zommed : undefined,
					fullWidth ? styles.full__width : undefined,
				].join(' ')}
				onClick={toggle}
				onLoad={updateSizing}
				ref={ref}
				alt={alt}
			/>
		</>
	);
};

export default ZoomImage;

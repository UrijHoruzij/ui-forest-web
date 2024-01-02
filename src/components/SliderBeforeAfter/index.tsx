import { FC, useState } from 'react';
import { SliderBeforeAfterProps } from './SliderBeforeAfter.types';
import styles from './SliderBeforeAfter.module.css';

const SliderBeforeAfter: FC<SliderBeforeAfterProps> = (props) => {
	const { componentAfter, componentBefore, size, aspectRatio, urlFirstImage, alt, urlSecondImage } = props;
	const [sliderPos, setSliderPos] = useState<number>(50);
	const handleChange = (e: any) => {
		setSliderPos(e.target.value);
	};
	const imageContainerStyle = {
		maxWidth: `${size}px`,
		maxHeight: `${size}px`,
		aspectRatio,
	};
	const renderImage = (type: string) => {
		if (type === 'after') {
			if (componentAfter) {
				const Component: any = componentAfter;
				return <Component className={[styles.imageAfter, styles.sliderImage, styles.image].join(' ')} />;
			}
			return (
				<img
					className={[styles.imageAfter, styles.sliderImage, styles.image].join(' ')}
					src={urlFirstImage}
					alt={alt}
				/>
			);
		}
		if (componentBefore) {
			const Component: any = componentBefore;
			return <Component className={[styles.imageBefore, styles.sliderImage, styles.image].join(' ')} />;
		}
		return (
			<img
				className={[styles.imageBefore, styles.sliderImage, styles.image].join(' ')}
				src={urlSecondImage}
				alt={alt}
			/>
		);
	};
	return (
		// @ts-ignore
		<div className={styles.wrapper} style={{ '--position': `${sliderPos}%`, width: `${size}px` }}>
			<div style={imageContainerStyle}>
				{(componentBefore || urlSecondImage) && renderImage('before')}
				{renderImage('after')}
			</div>
			{(componentBefore || urlSecondImage) && (
				<>
					<input onChange={handleChange} type="range" min="0" max="100" value="50" className={styles.slider} />
					<div className={styles.sliderLine} />
					<div className={styles.sliderButton} />
				</>
			)}
		</div>
	);
};

// SliderBeforeAfter.defaultProps = {
// 	size: 400,
// 	aspectRatio: '1/1',
// };

export default SliderBeforeAfter;

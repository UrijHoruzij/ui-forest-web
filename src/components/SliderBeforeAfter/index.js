import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './SliderBeforeAfter.module.css';

const SliderBeforeAfter = (props) => {
	const { componentAfter, componentBefore, size, aspectRatio, urlFirstImage, alt, urlSecondImage } = props;
	const [sliderPos, setSliderPos] = useState(50);
	const handleChange = (e) => {
		setSliderPos(e.target.value);
	};
	const imageContainerStyle = {
		maxWidth: `${size}px`,
		maxHeight: `${size}px`,
		aspectRatio: aspectRatio,
	};
	const renderImage = (type) => {
		if (type === 'after') {
			if (componentAfter) {
				let Component = componentAfter;
				return <Component className={classNames(styles.imageAfter, styles.sliderImage, styles.image)} />;
			} else {
				return (
					<img
						className={classNames(styles.imageAfter, styles.sliderImage, styles.image)}
						src={urlFirstImage}
						alt={alt}
					/>
				);
			}
		} else {
			if (componentBefore) {
				let Component = componentBefore;
				return <Component className={classNames(styles.imageBefore, styles.sliderImage, styles.image)} />;
			} else {
				return (
					<img
						className={classNames(styles.imageBefore, styles.sliderImage, styles.image)}
						src={urlSecondImage}
						alt={alt}
					/>
				);
			}
		}
	};
	return (
		<div className={styles.wrapper} style={{ '--position': `${sliderPos}%`, width: `${size}px` }}>
			<div style={imageContainerStyle}>
				{(componentBefore || urlSecondImage) && renderImage('before')}
				{renderImage('after')}
			</div>
			{(componentBefore || urlSecondImage) && (
				<>
					<input onChange={handleChange} type="range" min="0" max="100" value="50" className={styles.slider} />
					<div className={styles.sliderLine}></div>
					<div className={styles.sliderButton}></div>
				</>
			)}
		</div>
	);
};

SliderBeforeAfter.propTypes = {
	size: PropTypes.number.isRequired,
	aspectRatio: PropTypes.string.isRequired,
	urlFirstImage: PropTypes.string,
	urlSecondImage: PropTypes.string,
	alt: PropTypes.string,
	componentAfter: PropTypes.node,
	componentBefore: PropTypes.node,
};

SliderBeforeAfter.defaultProps = {
	size: 400,
	aspectRatio: '1/1',
};

export default SliderBeforeAfter;

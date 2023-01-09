import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './SliderBeforeAfter.module.css';

const SliderBeforeAfter = (props) => {
	const { width, height, urlFirstImage, urlSecondImage } = props;
	const foregroundImg = useRef(null);
	const buttonSlider = useRef(null);
	const handleChange = (e) => {
		const sliderPos = e.target.value;
		foregroundImg.current.style.width = `${sliderPos}%`;
		buttonSlider.current.style.left = `${sliderPos}%`;
	};
	const wrapperStyle = {
		width: width,
		height: height,
	};
	const firstImageStyle = {
		backgroundImage: `url(${urlFirstImage})`,
	};
	const secondImageStyle = {
		backgroundImage: `url(${urlSecondImage})`,
	};
	return (
		<div style={wrapperStyle} className={classNames(styles.wrapper)}>
			<div style={firstImageStyle} className={classNames(styles.image)} />
			{urlSecondImage && (
				<>
					<div
						style={secondImageStyle}
						className={classNames(styles.image, styles.foregroundImage)}
						ref={foregroundImg}
					/>
					<input
						className={classNames(styles.slider)}
						onChange={handleChange}
						type="range"
						min="1"
						max="100"
						value="50"
						name="slider"
					/>
					<div className={classNames(styles.buttonSlider)} ref={buttonSlider}></div>
				</>
			)}
		</div>
	);
};

SliderBeforeAfter.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	urlFirstImage: PropTypes.string.isRequired,
	urlSecondImage: PropTypes.string,
};

SliderBeforeAfter.defaultProps = {
	width: 400,
	height: 300,
};

export default SliderBeforeAfter;

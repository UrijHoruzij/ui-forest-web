import { FC } from 'react';
import { AvatarProps } from './Avatar.types';
import styles from './Avatar.module.css';
import { changeSizeContainer, changeSize, changeSizeSymbol, changeSizeOnline } from './sizes';

const generateColor = () => {
	return `#${Math.floor(Math.random() * (256 * 256 * 256))
		.toString(16)
		.padStart(6, '0')}`;
};

const AvatarComponent: FC<AvatarProps> = (props) => {
	const { className, fullname, size, isOnline } = props;
	const firstChar = fullname ? fullname[0].toUpperCase() : '';
	const changeImageClassName = (props: AvatarProps) => {
		return [props.imageClassName, styles.image, changeSize(props.size)].join(' ');
	};
	const renderImage = (props: AvatarProps, firstChar: string) => {
		const Component: any = props.component;
		if (props.component) {
			return <Component style={props.imageStyle} className={changeImageClassName(props)} alt={props.fullname} />;
		}
		if (props.avatar) {
			return (
				<img style={props.imageStyle} className={changeImageClassName(props)} src={props.avatar} alt={props.fullname} />
			);
		}
		return (
			<div
				style={{ background: generateColor() }}
				className={[styles.symbol, changeSize(props.size), changeSizeSymbol(props.size)].join(' ')}>
				{firstChar}
			</div>
		);
	};
	return (
		<div className={[className, styles.wrapper, changeSizeContainer(size)].join(' ')} {...props}>
			{renderImage(props, firstChar)}
			{isOnline && <div className={[styles.checkOnline, changeSizeOnline(size)].join(' ')} />}
		</div>
	);
};

// AvatarComponent.defaultProps = {
// 	size: 'small',
// 	isOnline: false,
// };
export default AvatarComponent;

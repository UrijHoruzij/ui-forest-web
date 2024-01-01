import { FC } from 'react';
import { TypographyProps } from './Typography.types';
import styles from './Typography.module.css';

const changeStyle = (fontStyle: any) => {
	switch (fontStyle) {
		case 'normal':
			return styles.normal;
		case 'italic':
			return styles.italic;
		case 'oblique':
			return styles.oblique;
		default:
			return styles.normal;
	}
};
const changeColor = (color: any) => {
	switch (color) {
		case 'accent':
			return styles.accent;
		case 'secondary':
			return styles.secondary;
		case 'text':
			return styles.text;
		default:
			return;
	}
};
const changeTransform = (transform: any) => {
	switch (transform) {
		case 'capitalize':
			return styles.capitalize;
		case 'lowercase':
			return styles.lowercase;
		case 'uppercase':
			return styles.uppercase;
		default:
			return;
	}
};
const changeDecoration = (decoration: any) => {
	switch (decoration) {
		case 'overline':
			return styles.overline;
		case 'underline':
			return styles.underline;
		case 'line-through':
			return styles.lineThrough;
		default:
			return;
	}
};
const changeType = (type: any) => {
	switch (type) {
		case 'h1':
			return styles.h1;
		case 'h2':
			return styles.h2;
		case 'h3':
			return styles.h3;
		case 'h4':
			return styles.h4;
		case 'h5':
			return styles.h5;
		case 'h6':
			return styles.h6;
		case 'text':
			return styles.p;
		case 'caption':
			return styles.caption;
		default:
			return styles.p;
	}
};
const Typography: FC<TypographyProps> = (props) => {
	const changeClassName = (props: TypographyProps) => {
		return [
			props.className,
			changeType(props.type),
			changeStyle(props.fontStyle),
			changeColor(props.color),
			changeTransform(props.transform),
			changeDecoration(props.decoration),
		].join(' ');
	};

	switch (props.type) {
		case 'h1':
			return <h1 {...props} className={changeClassName(props)} />;
		case 'h2':
			return <h2 {...props} className={changeClassName(props)} />;
		case 'h3':
			return <h3 {...props} className={changeClassName(props)} />;
		case 'h4':
			return <h4 {...props} className={changeClassName(props)} />;
		case 'h5':
			return <h5 {...props} className={changeClassName(props)} />;
		case 'h6':
			return <h6 {...props} className={changeClassName(props)} />;
		case 'text':
			return <p {...props} className={changeClassName(props)} />;
		case 'caption':
			return <figcaption {...props} className={changeClassName(props)} />;
		default:
			return <p {...props} className={changeClassName(props)} />;
	}
};

// Typography.defaultProps = {
// 	type: 'text',
// 	color: 'text',
// };

export default Typography;

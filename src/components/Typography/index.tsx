import { FC, createElement } from 'react';
import { TypographyProps } from './Typography.types';
import styles from './Typography.module.css';

const styleMap: Record<string, string> = {
	normal: styles.normal,
	italic: styles.italic,
	oblique: styles.oblique,
};
const colorMap: Record<string, string> = {
	accent: styles.accent,
	secondary: styles.secondary,
	text: styles.text,
};
const transformMap: Record<string, string> = {
	capitalize: styles.capitalize,
	lowercase: styles.lowercase,
	uppercase: styles.uppercase,
	none: '',
};
const decorationMap: Record<string, string> = {
	overline: styles.overline,
	underline: styles.underline,
	'line-through': styles.lineThrough,
	none: '',
};
const typeMap: Record<string, string> = {
	h1: styles.h1,
	h2: styles.h2,
	h3: styles.h3,
	h4: styles.h4,
	h5: styles.h5,
	h6: styles.h6,
	text: styles.p,
	caption: styles.caption,
};

const Typography: FC<TypographyProps> = (props) => {
	const { color = 'text', type = 'text', decoration = 'none', transform = 'none', fontStyle = 'normal' } = props;
	const changeClassName = () => {
		return [
			props.className,
			typeMap[type],
			styleMap[fontStyle],
			colorMap[color],
			transformMap[transform],
			decorationMap[decoration],
		].join(' ');
	};
	return createElement(props.type, { ...props, className: changeClassName() }, props.children);
};

export default Typography;

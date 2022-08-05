import { typography, pagination, avatar, grid, notification, button, zoomImage } from './index.mjs';
const theme = {
	name: 'light',
	'font-family': 'PT Astra Sans, sans-serif',
	'font-size': '16px',
	'font-weight': 400,
	'line-height': '20px',
	transition: '0.3s',
	...grid,
	...typography,
	...pagination,
	...notification,
	...avatar,
	...button,
	...zoomImage,
	radius: '4px',
	blur: '16px',
};
export default theme;

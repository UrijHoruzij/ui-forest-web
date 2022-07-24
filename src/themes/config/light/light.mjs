import { typography, pagination, avatar, grid, notification, button } from './index.mjs';
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
	radius: '4px',
	blur: '16px',
};
export default theme;
// "shadow-popup": `filter: drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.1));`,
//   "shadow-tooltip": `filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.2));`,

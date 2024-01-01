import { FC } from 'react';
import { AvatarProps, AvatarComposition } from './Avatar.types';
import AvatarComponent from './avatar';
import Group from './group';

const Avatar: FC<AvatarProps> & AvatarComposition = (props) => {
	return <AvatarComponent {...props} />;
};
Avatar.Group = Group;

// Avatar.defaultProps = {
// 	size: 'small',
// 	isOnline: false,
// };
export default Avatar;

import React from 'react';
import PropTypes from 'prop-types';
import AvatarComponent from './avatar';
import Group from './group';

const Avatar = (props) => {
	return <AvatarComponent {...props} />;
};
Avatar.Group = Group;

Avatar.propTypes = {
	component: PropTypes.node,
	fullname: PropTypes.string,
	avatar: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	className: PropTypes.string,
	style: PropTypes.object,
	imageClassName: PropTypes.string,
	imageStyle: PropTypes.object,
	isOnline: PropTypes.bool,
};
Avatar.defaultProps = {
	size: 'small',
	isOnline: false,
};
export default Avatar;

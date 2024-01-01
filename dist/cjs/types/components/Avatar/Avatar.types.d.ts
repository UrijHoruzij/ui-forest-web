import { FC, CSSProperties, ReactNode, MouseEventHandler, Component } from 'react';
export interface AvatarProps {
    component?: Component | ReactNode;
    fullname?: string;
    avatar?: string;
    size: 'small' | 'medium' | 'large';
    className?: string;
    style?: CSSProperties;
    imageClassName?: string;
    imageStyle?: CSSProperties;
    isOnline?: boolean;
}
export interface AvatarComposition {
    Group: FC<GroupProps>;
}
export interface GroupProps {
    users: AvatarProps[];
    add: boolean;
    onAdd: MouseEventHandler<HTMLDivElement>;
}
export interface AddButtonProps {
    users: AvatarProps[];
    onAdd: MouseEventHandler<HTMLDivElement>;
}

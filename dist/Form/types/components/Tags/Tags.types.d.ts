import { FC, ReactNode } from 'react';
export interface TagsProps {
    children?: ReactNode;
}
export interface TagProps {
    className?: string;
    children?: ReactNode;
    activ?: boolean;
    onClick?: (e?: any) => void;
}
export interface TagsComposition {
    Tag: FC<TagProps>;
}

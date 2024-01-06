import { ReactNode, CSSProperties, FC, FormEvent, Component, MouseEventHandler, ChangeEventHandler, KeyboardEvent } from 'react';

interface ButtonProps {
    as?: string;
    children?: ReactNode;
    className?: string;
    danger?: boolean;
    disabled?: boolean;
    href?: string;
    loading?: boolean;
    size: 'small' | 'medium' | 'large';
    styles?: CSSProperties;
    type: 'button' | 'reset' | 'submit';
    variant: 'primary' | 'secondary' | 'text';
}

declare const Button: FC<ButtonProps>;

interface PaginationProps {
    className?: string;
    style?: CSSProperties;
    arrowShow?: boolean;
    onPageChange: (e: any) => void;
    totalCount: number;
    siblingCount: number;
    currentPage: number;
    pageSize: number;
}

declare const Pagination: FC<PaginationProps>;

interface FormProps {
    children: ReactNode;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    className?: string;
    style?: CSSProperties;
}

declare const Form: FC<FormProps>;

interface ZoomImageProps {
    className?: string;
    style?: CSSProperties;
    src: string;
    alt: string;
}

declare const ZoomImage: FC<ZoomImageProps>;

interface SliderBeforeAfterProps {
    size: number;
    aspectRatio?: string;
    urlFirstImage?: string;
    urlSecondImage?: string;
    alt?: string;
    componentAfter?: ReactNode;
    componentBefore?: ReactNode;
}

declare const SliderBeforeAfter: FC<SliderBeforeAfterProps>;

interface TypographyProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'caption' | 'text';
    color?: 'accent' | 'text' | 'secondary';
    children?: ReactNode;
    fontStyle?: 'normal' | 'italic' | 'oblique';
    transform?: 'capitalize' | 'lowercase' | 'uppercase';
    decoration?: 'underline' | 'overline' | 'line-through';
    className?: string;
    style?: CSSProperties;
}

declare const Typography: FC<TypographyProps>;

interface NotificationProviderProps {
    children?: ReactNode;
}

declare const NotificationProvider: FC<NotificationProviderProps>;

interface GridProps {
    children?: ReactNode;
}
interface GridComposition {
    Container: FC<ContainerProps>;
    Column: FC<ColumnProps>;
    Row: FC<RowProps>;
}
interface ContainerProps {
    children?: ReactNode;
}
interface RowProps {
    children?: ReactNode;
}
interface ColumnProps {
    children?: ReactNode;
    className?: string;
    col?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}

declare const Grid: FC<GridProps> & GridComposition;

interface ImageProps {
    width: number;
    height: number;
    image: string;
}

declare const Image: FC<ImageProps>;

interface AvatarProps {
    component?: Component;
    fullname?: string;
    avatar?: string;
    size: 'small' | 'medium' | 'large';
    className?: string;
    style?: CSSProperties;
    imageClassName?: string;
    imageStyle?: CSSProperties;
    isOnline?: boolean;
}
interface AvatarComposition {
    Group: FC<GroupProps>;
}
interface GroupProps {
    users: AvatarProps[];
    add: boolean;
    onAdd: MouseEventHandler<HTMLDivElement>;
}

declare const Avatar: FC<AvatarProps> & AvatarComposition;

interface InputProps {
    id?: string;
    value: any;
    placeholder?: string;
    type: 'email' | 'password' | 'tel' | 'text' | 'url';
    name?: string;
    help?: string;
    className?: string;
    size: 'small' | 'medium' | 'large';
    status: 'error' | 'success' | 'default';
    style?: CSSProperties;
    onChange?: ChangeEventHandler;
    visibleTitle?: boolean;
    disabled?: boolean;
    onPressEnter?: KeyboardEvent;
}
interface InputComposition {
    Textarea: FC<InputProps>;
    Password: FC<InputProps>;
}

declare const Input: FC<InputProps> & InputComposition;

interface TagsProps {
    children?: ReactNode;
}
interface TagProps {
    className?: string;
    children?: ReactNode;
    activ?: boolean;
    onClick?: (e?: any) => void;
}
interface TagsComposition {
    Tag: FC<TagProps>;
}

declare const Tags: FC<TagsProps> & TagsComposition;

interface ThemeProps {
    theme: string;
    themes?: Record<string, string>;
    children?: ReactNode;
}

declare const ThemeProvider: FC<ThemeProps>;

declare const useEventListener: (eventName: any, handler: any, element?: any) => void;

declare const useForm: (state: any, validate: any, callback: any) => {
    handleChange: (e: any) => void;
    handleSubmit: (e: any) => void;
    values: any;
    errors: {};
};

declare const useNotification: () => (props: any) => void;

export { Avatar, Button, Form, Grid, Image, Input, NotificationProvider, Pagination, SliderBeforeAfter, Tags, ThemeProvider, Typography, ZoomImage, useEventListener, useForm, useNotification };

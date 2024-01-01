import { ReactNode, CSSProperties, FC, FormEvent } from 'react';

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
    onPageChange: Function;
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
    aspectRatio: string;
    urlFirstImage?: string;
    urlSecondImage?: string;
    alt?: string;
    componentAfter?: ReactNode;
    componentBefore?: ReactNode;
}

declare const SliderBeforeAfter: FC<SliderBeforeAfterProps>;

interface TypographyProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'caption' | 'text';
    color: 'accent' | 'text' | 'secondary';
    children?: ReactNode;
    fontStyle?: 'normal' | 'italic' | 'oblique';
    transform?: 'capitalize' | 'lowercase' | 'uppercase';
    decoration?: 'underline' | 'overline' | 'line-through';
    className?: string;
    style?: CSSProperties;
}

declare const Typography: FC<TypographyProps>;

interface NotificationProps {
    className?: string;
    style?: CSSProperties;
    type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';
}
interface NotificationProviderProps {
    children?: ReactNode;
}

declare const Notification: FC<NotificationProps>;

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

declare const useEventListener: (eventName: any, handler: any, element?: any) => void;

declare const useForm: (state: any, validate: any, callback: any) => {
    handleChange: (e: any) => void;
    handleSubmit: (e: any) => void;
    values: any;
    errors: {};
};

declare const useNotification: () => (props: any) => void;

export { Button, Form, Grid, Image, Notification, NotificationProvider, Pagination, SliderBeforeAfter, Typography, ZoomImage, useEventListener, useForm, useNotification };

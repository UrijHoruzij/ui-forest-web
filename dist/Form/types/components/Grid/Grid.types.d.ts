import { ReactNode, FC } from 'react';
export interface GridProps {
    children?: ReactNode;
}
export interface GridComposition {
    Container: FC<ContainerProps>;
    Column: FC<ColumnProps>;
    Row: FC<RowProps>;
}
export interface ContainerProps {
    children?: ReactNode;
}
export interface RowProps {
    children?: ReactNode;
}
export interface ColumnProps {
    children?: ReactNode;
    className?: string;
    col?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}

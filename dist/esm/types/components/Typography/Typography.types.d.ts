import { ReactNode, CSSProperties } from 'react';
export interface TypographyProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'caption' | 'text';
    color: 'accent' | 'text' | 'secondary';
    children?: ReactNode;
    fontStyle?: 'normal' | 'italic' | 'oblique';
    transform?: 'capitalize' | 'lowercase' | 'uppercase';
    decoration?: 'underline' | 'overline' | 'line-through';
    className?: string;
    style?: CSSProperties;
}

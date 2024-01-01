import { ReactNode, CSSProperties, FormEvent } from "react";
export interface FormProps {
    children: ReactNode;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    className?: string;
    style?: CSSProperties;
}

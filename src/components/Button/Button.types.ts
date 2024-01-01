import { ReactNode,CSSProperties } from "react"

export interface ButtonProps{
    as?: string,//element
	children?: ReactNode,
	className?: string,
	danger?: boolean,
	disabled?: boolean,
	href?: string,
	loading?: boolean,
	size: 'small'| 'medium'|'large',
	styles?: CSSProperties,
	type: 'button'| 'reset'|'submit',
	variant: 'primary'| 'secondary'| 'text',
}
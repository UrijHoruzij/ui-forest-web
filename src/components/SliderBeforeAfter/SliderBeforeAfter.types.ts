import { ReactNode } from 'react';

export interface SliderBeforeAfterProps {
	size: number;
	aspectRatio?: string;
	urlFirstImage?: string;
	urlSecondImage?: string;
	alt?: string;
	componentAfter?: ReactNode;
	componentBefore?: ReactNode;
}

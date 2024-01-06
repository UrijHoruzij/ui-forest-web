import { useEffect, useRef } from 'react';

const useEventListener = (eventName: any, handler: any, element: any = window) => {
	const savedHandler = useRef<any | undefined>();
	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);
	useEffect(() => {
		const isSupported = element && element.addEventListener;
		if (!isSupported) return;
		const eventListener = (event: any) => savedHandler.current?.(event);
		element.addEventListener(eventName, eventListener);
		return () => {
			element.removeEventListener(eventName, eventListener);
		};
	}, [eventName, element]);
};

export default useEventListener;

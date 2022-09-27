import { useEffect, useState } from "react";

type Callback<T> = () => T;

export const useTimeout = <T>(callback: Callback<T>, delay: number) => {
	const [data, setData] = useState<T>();

	useEffect(() => {
		const timer = setInterval(() => {
			setData(callback())
		}, delay);

		return () => clearInterval(timer);
	}, []);

	return { data };

};

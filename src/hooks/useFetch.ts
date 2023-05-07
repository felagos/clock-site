import { useEffect, useState } from 'react';

type Callback<T> = () => Promise<T>;

export const useFetch = <T>(fnCallback: Callback<T>) => {

	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState(true);

	const fetch = () => fnCallback()
		.then(setData)
		.finally(() => {
				setIsLoading(false);
		});

	useEffect(() => {
		fetch()
	}, []);

	return {
		data,
		fetch,
		isLoading,
	};

};
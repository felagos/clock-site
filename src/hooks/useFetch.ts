import { useEffect, useState } from 'react';

type Callback<T> = () => Promise<T>;

export const useFetch = <T>(fnCallback: Callback<T>) => {

	const [data, setData] = useState<T>();

	useEffect(() => {
		fnCallback().then(setData);
	}, []);

	return { data };

};
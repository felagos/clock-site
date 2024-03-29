import { useMemo } from "react";
import { getPeriodDay } from "./utils";
import { useFetch } from "./hooks";
import { getRandomImage } from "./services";
import { Clock, Loading, QuoteCard } from "./components";

import "./styles.scss";

export const App = () => {
	const periodDay = useMemo(() => getPeriodDay(), []);
	const { data: image, isLoading } = useFetch<string>(() => getRandomImage(periodDay));

	if (isLoading) return <Loading />;
	return (
		<div className="container" style={{ backgroundImage: `url(${image})` }}>
			<QuoteCard />
			<Clock />
		</div>
	);

}
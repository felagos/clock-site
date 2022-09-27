import { useFetch } from "./hooks/useFetch";
import { Quote } from "./models";
import { getRandomImage, getQuotes } from "./services";
import { getHour } from "./utils";
import { useTimeout } from "./hooks";

import "./styles.scss";

export const App = () => {
	const { data: image } = useFetch<string>(getRandomImage);
	const { data: quote } = useFetch<Quote>(getQuotes);
	const { data: hour } = useTimeout(getHour, 1000);

	return (
		<div className="container" style={{ backgroundImage: `url(${image})` }}>
			<div className="quote">
				<span className="quote__text">{`"${quote?.text}"`}</span>
				<span className="quote__auth">{quote?.author}</span>
				<span>{hour}</span>
			</div>
		</div>
	);

}
import { useFetch } from "./hooks/useFetch";
import { Quote } from "./models";
import { getRandomImage, getQuotes } from "./services";

import "./styles.scss";

export const App = () => {
	const { data: image } = useFetch<string>(getRandomImage);
	const { data: quote } = useFetch<Quote>(getQuotes);

	return (
		<div className="container" style={{ backgroundImage: `url(${image})` }}>
		</div>
	);

}
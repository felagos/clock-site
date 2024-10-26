import { useFetch } from "../../hooks";
import { Quote } from "../../models";
import { getQuotes } from "../../services";
import IconRefresh from "../../assets/refresh.svg";

import "./styles.scss";

export const QuoteCard = () => {

	const { data: quote, fetch: fetchQuotes } = useFetch<Quote>(getQuotes);

	const refreshQuote = () => fetchQuotes();

	if (!quote) return null;
	return (
		<div className="quote">
			<div className="quote__text">
				<span className="quote__text--content">
					{`"${quote.quote}"`}
				</span>
				<img src={IconRefresh} alt="refresh quote" onClick={refreshQuote} className="quote__refresh" />
			</div>
			<span className="quote__auth">{quote.author}</span>
		</div>
	);

}
import { useEffect, useState } from "react";
import { Quote } from "../models/quote.model";
import { getQuotes } from "../services/quote.service";

export const useQuote = () => {
	const [quotes, setQuotes] = useState<Quote[]>([]);

	useEffect(() => {
		getQuotes().then(setQuotes);
	}, []);

	return { quotes };

};
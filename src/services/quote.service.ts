import ENV from "../environment";
import { Quote } from "../models/quote.model";

export const getQuotes = async () => {
	const response = await fetch(`${ENV.QUOTE_API}/quotes`);
	const quotes = await response.json() as Quote[];

	return quotes;
};
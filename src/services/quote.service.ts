import { Quote } from "../models/quote.model";
import ENV from "../environment";
import { getRandom } from "../utils/random.util";

export const getQuotes = async (): Promise<Quote> => {
	const response = await fetch(`${ENV.QUOTE_API}/quotes`);
	const quotes = await response.json() as Quote[];

	const random = getRandom(0, quotes.length - 1);

	return quotes[random];
};
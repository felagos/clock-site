import { Quote } from "../models/quote.model";
import ENV from "../environment";

export const getQuotes = async (): Promise<Quote> => {
	const response = await fetch(ENV.QUOTE_API);
 	return await response.json() as Quote;	
};
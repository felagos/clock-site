import { ImageResponse } from "../models/image.model";
import ENV from "../environment";
import { getRandom } from "../utils/random.util";

const url = `${ENV.URL_IMAGES}/search/photos?query=forest&orientation=landscape`;

export const getRandomImage = async () => {
	const response = await fetch(url, {
		headers: {
			"Authorization": `Client-ID ${ENV.ACCESS_KEY}`
		}
	});

	const { results } = await response.json() as ImageResponse;
	const random = getRandom(0, results.length - 1);

	const image = results[random];

	return image.urls.full;

};
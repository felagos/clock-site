import { ImageResponse } from "../models/image.model";
import ENV from "../environment";

const url = `${ENV.URL}/search/photos?query=forest&orientation=landscape`;

const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomImage = async () => {
	const response = await fetch(url, {
		headers: {
			"Authorization": `Client-ID ${ENV.ACCESS_KEY}`
		}
	});

	const { results } = await response.json() as ImageResponse;
	const random = getRandom(0, results.length - 1)

	const image = results[random];

	return image.urls.full;

};
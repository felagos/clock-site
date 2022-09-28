import ENV from "../environment";

export const getCurrentLocation = async () => {
	const url = `${ENV.URL_IP}/?token=${ENV.TOKEN_IP}`;

	const response = await fetch(url)
	const data = await response.json();
	
	return {
		region: data.region,
		country: data.country
	}

}
import { useEffect, useState } from "react";
import { getRandomImage } from "../services/image.service";

export const useImage = () => {
	const [image, setImage] = useState("");

	useEffect(() => {
		getRandomImage().then(response => setImage(response));
	}, []);

	return { image };

};
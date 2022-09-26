import { useImage } from "./hooks/useImage";
import { useQuote } from "./hooks/useQuote";

import "./styles.scss";

export const App = () => {
	const { image } = useImage();
	const { quotes } = useQuote();

	return (
		<div className="container" style={{ backgroundImage: `url(${image})` }}>
		</div>
	);

}
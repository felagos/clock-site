import { useImage } from "./hooks/useImage";

import "./styles.scss";

export const App = () => {
	const { image } = useImage();

	return (
		<div className="container" style={{ backgroundImage: `url(${image})` }}>
		</div>
	);

}
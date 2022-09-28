import { useMemo, useState } from "react";
import { useFetch, useTimeout } from "../../hooks";
import { getCurrentLocation } from "../../services";
import { getHour, getPeriodDay } from "../../utils";

import "./styles.scss";

export const Clock = () => {
	const [icon, setIcon] = useState(null);

	const periodDay = useMemo(() => getPeriodDay(), []);

	useMemo(async () => {
		const icon = (await import(`../../assets/${periodDay}.svg`)).default;
		setIcon(icon);
	}, [periodDay]);

	const { data: hour } = useTimeout(getHour, 1000);
	const { data: location } = useFetch(getCurrentLocation);

	return (
		<div className="clock">
			<div className="clock__period">
				{icon && <img src={icon} alt="icon day" className="clock__icon" />}
				{`Good ${periodDay}, It's currently`.toUpperCase()}
			</div>
			<div className="clock__hour">{hour}</div>
			<div className="clock__location">
				{location && `in ${location.region}, ${location.country}`.toUpperCase()}
			</div>
		</div>
	);

};
import { useMemo } from "react";
import { useFetch, useTimeout } from "../../hooks";
import { getCurrentLocation } from "../../services";
import { getHour, getPeriodDay } from "../../utils";

import "./styles.scss";

export const Clock = () => {

	const periodDay = useMemo(() => getPeriodDay(), []);
	const pathIcon = useMemo(() => `/src/assets/${periodDay}.svg`, [periodDay])
	const { data: hour } = useTimeout(getHour, 1000);
	const { data: location } = useFetch(getCurrentLocation);

	return (
		<div className="clock">
			<div className="clock__period">
				<img src={require(pathIcon)} alt="icon day" className="clock__icon" />
				{`Good ${periodDay}, It's currently`.toUpperCase()}
			</div>
			<div className="clock__hour">{hour}</div>
			<div className="clock__location">
				{location && `in ${location.region}, ${location.country}`.toUpperCase()}
			</div>
		</div>
	);

};
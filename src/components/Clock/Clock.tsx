import { useMemo, useState } from "react";
import { useFetch, useTimeout } from "../../hooks";
import { getCurrentLocation } from "../../services";
import { getHour, getPeriodDay } from "../../utils";
import { DaysEnum } from "../../enums";

import "./styles.scss";

export const Clock = () => {
	const periodDay = useMemo(() => getPeriodDay(), []);


	const icon = useMemo(() => {
		if(periodDay === DaysEnum.DAY) return require('../../assets/day.svg');
		if(periodDay === DaysEnum.NOON) return require('../../assets/noon.svg');
		if(periodDay === DaysEnum.AFTERNOON) return require('../../assets/afternoon.svg');

		return require('../../assets/night.svg')
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
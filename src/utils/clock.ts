import { DaysEnum } from "../enums";

export const getHour = () => {
	const time = new Date();

	const hour = time.getHours();
	const min = time.getMinutes();

	const strHour = hour < 10 ? "0" + hour : hour;
	const strMin = min < 10 ? "0" + min : min;

	return `${strHour}:${strMin}`;
};

export const getPeriodDay = () => {
	const time = new Date();
	const hour = time.getHours();

	if (hour < 12) return DaysEnum.DAY;
	if (hour === 12) return DaysEnum.NOON;
	if (hour <= 18) return DaysEnum.AFTERNOON;

	return DaysEnum.NIGHT;

};
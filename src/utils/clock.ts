export const getHour = () => {
	const time = new Date();

	const hour = time.getHours();
	const min = time.getMinutes();

	const strHour = hour < 10 ? "0" + hour : hour;
	const strMin = min < 10 ? "0" + min : min;
	
	return `${strHour}:${strMin}`;
}
export const calculateTime = (value: number) => {
	const minutes =
		Math.floor(value / 60) < 10
			? `0${Math.floor(value / 60)}`
			: Math.floor(value / 60);
	const seconds =
		Math.floor(value % 60) < 10
			? `0${Math.floor(value % 60)}`
			: Math.floor(value % 60);
	return `${minutes}:${seconds}`;
};

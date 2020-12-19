export const stations = [
	{
		name: '교대',
		line: ['2호선', '3호선'],
	},
	{
		name: '강남',
		line: ['2호선', '3호선'],
	},
	{
		name: '양재',
		line: ['3호선'],
	},
	{
		name: '양재시민의숲',
		line: ['3호선'],
	},
];

// distance (km), time (minute)
export const edges = [
	{
		from: '교대',
		to: '강남',
		distance: 4,
		time: 5,
	},
	{
		from: '강남',
		to: '양재',
		distance: 8,
		time: 10,
	},
	{
		from: '양재',
		to: '양재시민의숲',
		distance: 2,
		time: 2.5,
	},
	{
		from: '교대',
		to: '양재시민의숲',
		distance: 4,
		time: 5,
	},
];

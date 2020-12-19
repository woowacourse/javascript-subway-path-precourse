export const stations = [
	{
		name: '교대',
		line: ['2호선', '3호선'],
	},
	{
		name: '강남',
		line: ['2호선', '3호선', '신분당선'],
	},
	{
		name: '역삼',
		line: ['2호선'],
	},
	{
		name: '남부터미널',
		line: ['3호선'],
	},
	{
		name: '양재',
		line: ['3호선', '신분당선'],
	},
	{
		name: '양재시민의술',
		line: ['3호선', '신분당선'],
	},
	{
		name: '매봉',
		line: ['3호선'],
	},
];

// distance (km), time (minute)
export const edges = [
	{
		from: '교대',
		to: '강남',
		distance: 2,
		time: 3,
	},
	{
		from: '강남',
		to: '역삼',
		distance: 2,
		time: 3,
	},
	{
		from: '교대',
		to: '남부터미널',
		distance: 3,
		time: 2,
	},
	{
		from: '남부터미널',
		to: '양재',
		distance: 6,
		time: 5,
	},
	{
		from: '양재',
		to: '매봉',
		distance: 1,
		time: 1,
	},
	{
		from: '강남',
		to: '양재',
		distance: 2,
		time: 8,
	},
	{
		from: '양재',
		to: '양재시민의숲',
		distance: 10,
		time: 3,
	},
];

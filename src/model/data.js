export const stations = [
  '교대',
  '강남',
  '역삼',
  '남부터미널',
  '양재',
  '양재시민의숲',
  '매봉',
];

const NONE = -1;

export const lines = [
  {
    name: '2호선',
    station: ['교대', '강남', '역삼'],
    distance: [2, 2, NONE],
    time: [3, 3, NONE],
  },
  {
    name: '3호선',
    station: ['교대', '남부터미널', '양재', '매봉'],
    distance: [3, 6, 1, NONE],
    time: [2, 5, 1, NONE],
  },
  {
    name: '신분당선',
    station: ['강남', '양재', '양재시민의숲'],
    distance: [2, 10, NONE],
    time: [8, 3, NONE],
  },
];

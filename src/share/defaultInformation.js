export const stationList = [
  '교대',
  '강남',
  '역삼',
  '남부터미널',
  '양재',
  '양재시민의숲',
  '매봉',
];

export const lineList = [
  {
    name: '2호선',
    startStation: '교대',
    endStation: '역삼',
    section: [
      {
        start: '교대',
        end: '강남',
        distance: 2,
        time: 3,
      },
      {
        start: '강남',
        end: '역삼',
        distance: 2,
        time: 3,
      },
    ],
  },
  {
    name: '3호선',
    startStation: '교대',
    endStation: '매봉',
    section: [
      {
        start: '교대',
        end: '남부터미널',
        distance: 3,
        time: 2,
      },
      {
        start: '남부터미널',
        end: '양재',
        distance: 6,
        time: 5,
      },
      {
        start: '양재',
        end: '매봉',
        distance: 1,
        time: 1,
      },
    ],
  },
  {
    name: '신분당선',
    startStation: '강남',
    endStation: '양재시민의숲',
    section: [
      {
        start: '강남',
        end: '양재',
        distance: 2,
        time: 8,
      },
      {
        start: '양재',
        end: '양재시민의숲',
        distance: 10,
        time: 3,
      },
    ],
  },
];

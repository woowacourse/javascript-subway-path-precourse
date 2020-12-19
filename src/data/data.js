export const stations = ['교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'];

export const lines = [
  {
    lineName: '2호선',
    lines: [
      {
        start: '교대',
        end: '강남',
        time: 3,
        distance: 2,
      },
      {
        start: '강남',
        end: '역삼',
        time: 3,
        distance: 2,
      },
    ],
  },
  {
    lineName: '3호선',
    lines: [
      {
        start: '교대',
        end: '남부터미널',
        time: 2,
        distance: 3,
      },
      {
        start: '남부터미널',
        end: '양재',
        time: 5,
        distance: 6,
      },
      {
        start: '양재',
        end: '매봉',
        time: 1,
        distance: 1,
      },
    ],
  },
  {
    lineName: '3호선',
    lines: [
      {
        start: '강남',
        end: '양재',
        time: 8,
        distance: 2,
      },
      {
        start: '양재',
        end: '양재시민의 숲',
        time: 3,
        distance: 10,
      },
    ],
  },
];

export const stations = [
  {
    name: '교대',
    sections: {
      강남: [2, 3],
      남부터미널: [3, 2],
    },
  },
  {
    name: '강남',
    sections: {
      교대: [2, 3],
      역삼: [2, 3],
      양재: [2, 8],
    },
  },
  {
    name: '역삼',
    sections: {
      강남: [2, 3],
    },
  },
  {
    name: '남부터미널',
    sections: {
      교대: [3, 2],
      양재: [6, 5],
    },
  },
  {
    name: '양재',
    sections: {
      남부터미널: [6, 5],
      매봉: [1, 1],
      강남: [2, 8],
      양재시민의숲: [10, 3],
    },
  },
  {
    name: '매봉',
    sections: {
      양재: [1, 1],
    },
  },
  {
    name: '양재시민의숲',
    sections: {
      양재: [10, 3],
    },
  },
];

export const lines = [
  {
    name: '2호선',
    stations: ['교대', '강남', '역삼'],
  },
  {
    name: '3호선',
    stations: ['교대', '남부터미널', '양재', '매봉'],
  },
  {
    name: '신분당선',
    stations: ['강남', '양재', '양재시민의숲'],
  },
];

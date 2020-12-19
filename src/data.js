export const stations = [
  {
    name: '교대',
  },
  {
    name: '강남',
  },
  {
    name: '역삼',
  },
  {
    name: '남부터미널',
  },
  {
    name: '양재',
  },
  {
    name: '양재시민의숲',
  },
  {
    name: '매봉 ',
  },
];

export const lines = [
  {
    name: '2호선',
    stations: [{ name: '교대' }, { name: '강남' }, { name: '역삼' }],
    sections: [
      { distance: '2', time: '3' },
      { distance: '2', time: '3' },
    ],
  },
  {
    name: '3호선',
    stations: [
      { name: '교대' },
      { name: '남부터미널' },
      { name: '양재' },
      { name: '매봉' },
    ],
    sections: [
      { distance: '3', time: '2' },
      { distance: '6', time: '5' },
      { distance: '1', time: '1' },
    ],
  },
  {
    name: '신분당선',
    stations: [{ name: '강남' }, { name: '양재' }, { name: '양재시민의숲' }],
    sections: [
      { distance: '2', time: '8' },
      { distance: '10', time: '3' },
    ],
  },
];

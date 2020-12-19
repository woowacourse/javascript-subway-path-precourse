export const initalStationData = {
  교대: {
    connected: [
      { station: '강남', distance: 2, time: 3 },
      { station: '남부터미널', distance: 3, time: 2 },
    ],
  },
  강남: {
    connected: [
      { station: '교대', distance: 2, time: 3 },
      { station: '역삼', distance: 2, time: 3 },
      { station: '양재', distance: 2, time: 8 },
    ],
  },
  역삼: {
    connected: [{ station: '강남', distance: 2, time: 3 }],
  },
  남부터미널: {
    connected: [
      { station: '교대', distance: 3, time: 2 },
      { station: '양재', distance: 6, time: 5 },
    ],
  },
  양재: {
    connected: [
      { station: '남부터미널', distance: 3, time: 2 },
      { station: '매봉', distance: 1, time: 1 },
      { station: '강남', distance: 2, time: 8 },
      { station: '양재시민의 숲', distance: 10, time: 3 },
    ],
  },
  매봉: {
    connected: [{ station: '양재', distance: 1, time: 1 }],
  },
  '양재시민의 숲': {
    connected: [{ station: '양재', distance: 10, time: 3 }],
  },
};

export const initalLineData = {
  '2호선': [
    { station: '교대', distance: 0, time: 0 },
    { station: '강남', distance: 2, time: 3 },
    { station: '역삼', distance: 2, time: 3 },
  ],
  '3호선': [
    { station: '교대', distance: 0, time: 0 },
    { station: '남부터미널', distance: 3, time: 2 },
    { station: '양재', distance: 6, time: 5 },
    { station: '매봉', distance: 1, time: 1 },
  ],
  신분당선: [
    { station: '강남', distance: 0, time: 0 },
    { station: '양재', distance: 2, time: 8 },
    { station: '양재시민의 숲', distance: 10, time: 3 },
  ],
};

export default {
  initalLineData,
  initalStationData,
};

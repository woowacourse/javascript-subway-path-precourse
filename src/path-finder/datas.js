export const stations = [
  {
    name: "교대",
  },
  {
    name: "강남",
  },
  {
    name: "역삼",
  },
  {
    name: "남부터미널",
  },
  {
    name: "양재",
  },
  {
    name: "양재시민의숲",
  },
  {
    name: "매봉",
  },
];

export const lines = [
  {
    name: "2호선",
    sections: [
      "교대",
      { distance: 2, time: 3 },
      "강남",
      { distance: 2, time: 3 },
      "역삼",
    ],
  },
  {
    name: "3호선",
    sections: [
      "교대",
      { distance: 3, time: 2 },
      "남부터미널",
      { distance: 6, time: 5 },
      "양재",
      { distance: 1, time: 1 },
      "매봉",
    ],
  },
  {
    name: "신분당선",
    sections: [
      "강남",
      { distance: 2, time: 8 },
      "양재",
      { distance: 10, time: 3 },
      "양재시민의숲",
    ],
  },
];

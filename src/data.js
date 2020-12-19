export const stations = [
  {
    name: "교대",
    nextStations: [{ 강남: [2, 3] }, { 남부터미널: [3, 2] }],
  },
  {
    name: "강남",
    nextStations: [{ 교대: [2, 3] }, { 양재: [2, 8] }, { 역삼: [2, 3] }],
  },
  {
    name: "역삼",
    nextStations: [{ 강남: [2, 3] }],
  },
  {
    name: "남부터미널",
    nextStations: [{ 교대: [3, 2] }, { 양재: [6, 5] }],
  },
  {
    name: "양재",
    nextStations: [
      { 매봉: [1, 1] },
      { 남부터미널: [6, 5] },
      { 양재시민의숲: [10, 3] },
      { 강남: [2, 8] },
    ],
  },
  {
    name: "양재시민의숲",
    nextStations: [{ 양재: [10, 3] }],
  },
  {
    name: "매봉",
    nextStations: [{ 양재: [1, 1] }],
  },
];

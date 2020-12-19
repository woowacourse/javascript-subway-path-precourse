const stations = [
  "교대",
  "강남",
  "역삼",
  "남부터미널",
  "양재",
  "양재시민의숲",
  "매봉",
];

const lines = [
  {
    line: "2호선",
    station: ["교대", "강남", "역삼"],
    kilometer: [2, 2],
    minute: [3, 3],
  },
  {
    line: "3호선",
    station: ["교대", "남부터미널", "양재", "매봉"],
    kilometer: [3, 6, 1],
    minute: [2, 5, 1],
  },
  {
    line: "신분당선",
    station: ["강남", "양재", "양재시민의숲"],
    kilometer: [2, 10],
    minute: [8, 3],
  },
];

export { stations, lines };

export const Stations = [
  { name: "교대" },
  { name: "강남" },
  { name: "역삼" },
  { name: "남부터미널" },
  { name: "양재" },
  { name: "양재시민의숲" },
  { name: "매봉" },
];

export const Lines = [
  {
    line: "2호선",
    stations: ["교대", "강남", "역삼"],
    distance: [2, 2],
    time: [3, 3],
  },
  {
    line: "3호선",
    stations: ["교대", "남부터미널", "양재", "매봉"],
    distance: [3, 6, 1],
    time: [2, 5, 1],
  },
  {
    line: "신분당선",
    stations: ["강남", "양재", "양재시민의숲"],
    distance: [2, 10],
    time: [8, 3],
  },
];

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
    stations: ["교대", "강남", "역삼"],
  },
  {
    name: "3호선",
    stations: ["교대", "남부터미널", "양재", "매봉"],
  },
  {
    name: "신분당선",
    stations: ["강남", "양재", "양재시민의숲"],
  },
];

export const sections = [
  {
    start: "교대",
    end: "강남",
    distance: 2,
    time: 3,
  },
  {
    start: "강남",
    end: "역삼",
    distance: 2,
    time: 3,
  },
  {
    start: "교대",
    end: "남부터미널",
    distance: 3,
    time: 2,
  },
  {
    start: "남부터미널",
    end: "양재",
    distance: 6,
    time: 5,
  },
  {
    start: "양재",
    end: "매봉",
    distance: 1,
    time: 1,
  },
  {
    start: "강남",
    end: "양재",
    distance: 2,
    time: 8,
  },
  {
    start: "양재",
    end: "양재시민의숲",
    distance: 10,
    time: 3,
  },
];

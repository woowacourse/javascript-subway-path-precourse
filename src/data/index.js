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
    departure: "교대",
    arrival: "강남",
    distance: 2,
    time: 3,
  },
  {
    departure: "강남",
    arrival: "역삼",
    distance: 2,
    time: 3,
  },
  {
    departure: "교대",
    arrival: "남부터미널",
    distance: 3,
    time: 2,
  },
  {
    departure: "남부터미널",
    arrival: "양재",
    distance: 6,
    time: 5,
  },
  {
    departure: "양재",
    arrival: "매봉",
    distance: 1,
    time: 1,
  },
  {
    departure: "강남",
    arrival: "양재",
    distance: 2,
    time: 8,
  },
  {
    departure: "양재",
    arrival: "양재시민의숲",
    distance: 10,
    time: 3,
  },
];

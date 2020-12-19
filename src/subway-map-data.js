export const stations = [
  "교대",
  "강남",
  "역삼",
  "남부터미널",
  "양재",
  "양재시민의숲",
  "매봉",
];

export const lines = [
  {
    name: "2호선",
    section: ["교대", "강남", "역삼"],
    sectionDistance: [2, 2],
    sectionTravelTime: [3, 3],
  },
  {
    name: "3호선",
    section: ["교대", "남부터미널", "양재", "매봉"],
    sectionDistance: [3, 6, 1],
    sectionTravelTime: [2, 5, 1],
  },
  {
    name: "신분당선",
    section: ["강남", "양재", "양재시민의숲"],
    sectionDistance: [2, 10],
    sectionTravelTime: [8, 3],
  },
];

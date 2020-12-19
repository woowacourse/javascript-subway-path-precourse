export const stations = ["교대", "강남", "역삼", "남부터미널", "양재", "양재시민의숲", "매봉"];

export const lines = [
  {
    lineName: "2호선",
    stations: ["교대", "강남", "역삼"]
  },
  {
    lineName: "3호선",
    stations: ["교대", "남부터미널", "양재", "매봉"]
  },
  {
    lineName: "신분당선",
    stations: ["강남", "양재", "양재시민의숲"]
  }
];

export const sections = [
  {
    station: "교대",
    adjacent: [
      { station: "강남", dist: 2, time: 3 },
      { station: "남부터미널", dist: 6, time: 5 }
    ]
  },
  {
    station: "강남",
    adjacent: [
      { station: "교대", dist: 2, time: 3 },
      { station: "역삼", dist: 2, time: 3 },
      { station: "양재", dist: 2, time: 8 }
    ]
  },
  {
    station: "남부터미널",
    adjacent: [
      { station: "양재", dist: 1, time: 1 },
      { station: "교대", dist: 3, time: 2 }
    ]
  },
  {
    station: "양재",
    adjacent: [
      { station: "남부터미널", dist: 6, time: 5 },
      { station: "매봉", dist: 1, time: 1 },
      { station: "강남", dist: 2, time: 8 },
      { station: "양재시민의숲", dist: 10, time: 3 }
    ]
  },
  {
    station: "매봉",
    adjacent: [
      { station: "양재", dist: 1, time: 1 }
    ]
  },
  {
    station: "양재시민의숲",
    adjacent: [
      { station: "양재", dist: 10, time: 3 }
    ]
  }
];
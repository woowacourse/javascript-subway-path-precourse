export const lines = [
  {
    lineName: "2호선",
    stations: [
      {
        name: "교대",
        nextStation: "강남",
        distance: 2,
        time: 3,
      },
      {
        name: "강남",
        nextStation: "역삼",
        distance: 2,
        time: 3,
      },
      {
        name: "역삼",
        nextStation: null,
        distance: null,
        time: null,
      },
    ],
  },
  {
    lineName: "3호선",
    stations: [
      {
        name: "교대",
        nextStation: "남부터미널",
        distance: 3,
        time: 2,
      },
      {
        name: "남부터미널",
        nextStation: "양재",
        distance: 6,
        time: 5,
      },
      {
        name: "양재",
        nextStation: "매봉",
        distance: 1,
        time: 1,
      },
      {
        name: "매봉",
        nextStation: null,
        distance: null,
        time: null,
      },
    ],
  },
  {
    lineName: "신분당선",
    stations: [
      {
        name: "강남",
        nextStation: "양재",
        distance: 2,
        time: 8,
      },
      {
        name: "양재",
        nextStation: "양재시민의숲",
        distance: 10,
        time: 3,
      },
      {
        name: "양재시민의숲",
        nextStation: null,
        distance: null,
        time: null,
      },
    ],
  },
];

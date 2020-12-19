export const stations = ["교대", "강남", "역삼", "남부터미널", "양재", "양재시민의숲", "매봉"];

export const lines = [
  {
    name: "2호선",
    sections: [
      {
        name: "교대",
        transferStation: "3호선",
        distanceToNext: 2,
        timeToNext: 3,
      },
      {
        name: "강남",
        transferStation: "신분당선",
        distanceToNext: 2,
        timeToNext: 3,
      },
      {
        name: "역삼",
        distanceToNext: 0,
        timeToNext: 0,
      },
    ],
  },
  {
    name: "3호선",
    sections: [
      {
        name: "교대",
        transferStation: "2호선",
        distanceToNext: 2,
        timeToNext: 8,
      },
      {
        name: "남부터미널",
        distanceToNext: 6,
        timeToNext: 5,
      },
      {
        name: "양재",
        transferStation: "신분당선",
        distanceToNext: 1,
        timeToNext: 1,
      },
      {
        name: "매봉",
        distanceToNext: 0,
        timeToNext: 0,
      },
    ],
  },
  {
    name: "신분당선",
    sections: [
      {
        name: "강남",
        transferStation: "신분당선",
        distanceToNext: 2,
        timeToNext: 8,
      },
      {
        name: "양재",
        transferStation: "3호선",
        distanceToNext: 10,
        timeToNext: 3,
      },
      {
        name: "양재시만의숲",
        distanceToNext: 0,
        timeToNext: 0,
      },
    ],
  },
];

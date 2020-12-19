export const initialLineInputs = [
  makeLine({
    lineName: "2호선",
    stationsOfLine: ["교대", "강남", "역삼"],
    distanceWeight: [2, 2],
    durationWeight: [3, 3],
  }),
  makeLine({
    lineName: "3호선",
    stationsOfLine: ["교대", "남부터미널", "양재", "매봉"],
    distanceWeight: [3, 6, 1],
    durationWeight: [2, 5, 1],
  }),
  makeLine({
    lineName: "신분당선",
    stationsOfLine: ["강남", "양재", "양재시민의숲"],
    distanceWeight: [2, 10],
    durationWeight: [8, 3],
  }),
];

function makeLine({
  lineName,
  stationsOfLine = [],
  distanceWeight = [],
  durationWeight = [],
}) {
  const [startStation, ...stations] = stationsOfLine;
  return {
    lineName: lineName,
    stationsOfLine: [startStation, ...stations],
    distanceWeight: distanceWeight,
    durationWeight: durationWeight,
  };
}

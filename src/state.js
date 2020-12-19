import Dijkstra from "./utils/Dijkstra.js";

const State = function () {
  this.state = {
    stations: [
      {
        name: "교대",
        relatedStations: [
          { name: "강남", distance: 2, time: 3 },
          { name: "남부터미널", distance: 3, time: 2 },
        ],
      },
      {
        name: "강남",
        relatedStations: [
          { name: "교대", distance: 2, time: 3 },
          { name: "역삼", distance: 2, time: 3 },
          { name: "양재", distance: 2, time: 8 },
        ],
      },
      {
        name: "역삼",
        relatedStations: [{ name: "강남", distance: 2, time: 3 }],
      },
      {
        name: "남부터미널",
        relatedStations: [
          { name: "교대", distance: 3, time: 2 },
          { name: "양재", distance: 6, time: 5 },
        ],
      },
      {
        name: "양재",
        relatedStations: [
          { name: "남부터미널", distance: 6, time: 5 },
          { name: "매봉", distance: 1, time: 1 },
          { name: "강남", distance: 2, time: 8 },
          { name: "양재시민의숲", distance: 10, time: 3 },
        ],
      },
      {
        name: "매봉",
        relatedStations: [{ name: "양재", distance: 1, time: 1 }],
      },
      {
        name: "양재시민의숲",
        relatedStations: [{ name: "양재", distance: 10, time: 3 }],
      },
    ],
    departureStation: "",
    arrivalStation: "",
    searchType: "distance",
    alreadyGoneStations: [],
    dijkstra: new Dijkstra(),
  };
  this.setState = (key, value) => (this.state[key] = value);
};

export const { state, setState } = new State();

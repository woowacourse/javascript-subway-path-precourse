const State = function () {
  this.state = {
    stations: [
      {
        name: "교대",
        relatedStations: [
          { name: "강남", km: 2, minute: 3 },
          { name: "남부터미널", km: 3, minute: 2 },
        ],
      },
      {
        name: "강남",
        relatedStations: [
          { name: "교대", km: 2, minute: 3 },
          { name: "역삼", km: 2, minute: 3 },
          { name: "양재", km: 2, minute: 8 },
        ],
      },
      {
        name: "역삼",
        relatedStations: [{ name: "강남", km: 2, minute: 3 }],
      },
      {
        name: "남부터미널",
        relatedStations: [
          { name: "교대", km: 3, minute: 2 },
          { name: "양재", km: 6, minute: 5 },
        ],
      },
      {
        name: "양재",
        relatedStations: [
          { name: "남부터미널", km: 6, minute: 5 },
          { name: "매봉", km: 1, minute: 1 },
          { name: "강남", km: 2, minute: 8 },
          { name: "양재시민의숲", km: 10, minute: 3 },
        ],
      },
    ],
    departureStation: "",
    arrivalStation: "",
    orderBy: "distance",
  };
  this.setState = (key, value) = this.state[key] = value;
};

export const { state, setState } = new State();

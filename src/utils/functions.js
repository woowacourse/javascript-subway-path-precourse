import { setState, state } from "../state.js";
import Dijkstra from "./Dijkstra.js";

const Functions = function () {
  this.setDepartureStation = () => {
    const departureStation = document.getElementById(
      "departure-station-name-input"
    ).value;
    setState("departureStation", departureStation);
  };
  this.setArrivalStation = () => {
    const arrivalStation = document.getElementById("arrival-station-name-input")
      .value;
    setState("arrivalStation", arrivalStation);
  };

  this.isBiggerThanOne = (a) => a > 1;

  this.isExist = (station) =>
    state.stations
      .map((station) => station.name)
      .reduce(
        (result, stationAtState) => result || station === stationAtState,
        false
      );

  this.isSame = (a, b) => a === b;

  this.isValid = () =>
    this.isBiggerThanOne(state.departureStation.length) &&
    this.isBiggerThanOne(state.arrivalStation.length) &&
    this.isExist(state.departureStation) &&
    this.isExist(state.arrivalStation) &&
    !this.isSame(state.departureStation, state.arrivalStation);

  this.IsAlreadyGoneMatch = (station1, station2) =>
    state.alreadyGoneStations.indexOf(`${station1},${station2}`) !== -1 ||
    state.alreadyGoneStations.indexOf(`${station2},${station1}`) !== -1;

  this.getStationIndex = (station) =>
    state.stations.findIndex(
      (stationInState) => stationInState.name === station
    );

  this.generateNextGoneStations = (station1, station2) =>
    state.alreadyGoneStations.concat(`${station1.name},${station2.name}`);

  this.setEdges = (currentStation) => {
    currentStation.relatedStations.forEach((station) => {
      if (this.IsAlreadyGoneMatch(currentStation.name, station.name)) return;
      state.dijkstra.addEdge(currentStation.name,station.name,station[state.searchType]);
      const nestGoneStations = this.generateNextGoneStations(currentStation,station);
      setState("alreadyGoneStations", nestGoneStations);
      setEdges(state.stations[this.getStationIndex(station.name)]);
    });
  };

  this.getMinimumPath = () => {
    setState("dijkstra", new Dijkstra());
    setState("alreadyGoneStations", []);
    const station =
        state.stations[this.getStationIndex(state.departureStation)]
    setEdges(station);
    return state.dijkstra.findShortestPath(
      state.departureStation,
      state.arrivalStation
    );
  };
};

export const {
  setDepartureStation,
  setArrivalStation,
  isValid,
  setEdges,getMinimumPath
} = new Functions();

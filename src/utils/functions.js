import {
  ALREADY_GONE_STATIONS,
  ARRIVAL_STATION,
  DEPARTURE_STATION,
  DIJKSTRA,
  DEPARTURE_STATION_INPUT_ID,
  ARRIVAL_STATION_INPUT_ID,
  RIGHT_ARROW_EXPRESSION,
} from "../../constant.js";
import { setState, state } from "../state.js";
import Dijkstra from "./Dijkstra.js";

const Functions = function () {
  this.setDepartureStation = () => {
    const departureStation = document.getElementById(DEPARTURE_STATION_INPUT_ID)
      .value;
    setState(DEPARTURE_STATION, departureStation);
  };
  this.setArrivalStation = () => {
    const arrivalStation = document.getElementById(ARRIVAL_STATION_INPUT_ID)
      .value;
    setState(ARRIVAL_STATION, arrivalStation);
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
      setState(ALREADY_GONE_STATIONS, nestGoneStations);
      setEdges(state.stations[this.getStationIndex(station.name)]);
    });
  };

  this.getMinimumPath = () => {
    setState(DIJKSTRA, new Dijkstra());
    setState(ALREADY_GONE_STATIONS, []);
    const station =
      state.stations[this.getStationIndex(state.departureStation)];
    setEdges(station);
    return state.dijkstra.findShortestPath(
      state.departureStation,
      state.arrivalStation
    );
  };

  this.getMinimumCost = (type) => {
    const minimumPath = this.getMinimumPath();
    let result = 0;
    for (let i = 0; i < minimumPath.length - 1; i++) {
      result += state.stations[
        this.getStationIndex(minimumPath[i])
      ].relatedStations.filter(
        (relatedStation) => relatedStation.name === minimumPath[i + 1]
      )[0][type];
    }
    return result;
  };

  this.getFormattedPath = (path) => path.join(RIGHT_ARROW_EXPRESSION);
};

export const {
  setDepartureStation,
  setArrivalStation,
  isValid,
  setEdges,
  getMinimumPath,
  getMinimumCost,
  getFormattedPath,
} = new Functions();

import { setState, state } from "../state.js";

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
};

export const {
  setDepartureStation,
  setArrivalStation,
  isValid,
} = new Functions();

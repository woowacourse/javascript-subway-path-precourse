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
};

export const {
  setDepartureStation,
  setArrivalStation,
  isValid,
} = new Functions();

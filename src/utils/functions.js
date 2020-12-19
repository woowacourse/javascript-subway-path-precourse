import { setState } from "../state.js";

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
};

export const { setDepartureStation, setArrivalStation } = new Functions();

import { checkValidate } from "./validate.js";
import { findRoads } from "./findRoad.js";
export function searchButtonHanlder(e) {
  const departure = document.querySelector("#departure-station-name-input");
  const arrival = document.querySelector("#arrival-station-name-input");

  if (checkValidate(departure.value, arrival.value, this)) {
    return;
  }

  findRoads.call(this, departure.value, arrival.value);
}

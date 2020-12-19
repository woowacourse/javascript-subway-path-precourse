import { ERR_MESSAGE } from "./constants.js";
import { isValidateName } from "./validate.js";
export function searchButtonHanlder(e) {
  const departure = document.querySelector("#departure-station-name-input");
  const arrival = document.querySelector("#arrival-station-name-input");
  if (!isValidateName(departure.value) || !isValidateName(arrival.value)) {
    alert(ERR_MESSAGE.NAME_LIMIT_ERROR);
    return;
  }
  if (departure.value === arrival.value) {
    alert(ERR_MESSAGE.SAME_INPUT);
    return;
  }
}

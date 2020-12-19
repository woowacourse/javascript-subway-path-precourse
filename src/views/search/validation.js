import { notExistAlert, minimunLengthAlert, sameDepartArrivalAlert } from "../search/alert.js";
import { SHORTEST_DISTANCE, SHORTEST_TIME } from "./const.js";

function validateStation(stationNames) {
  let alertMsg = minimunLengthAlert(stationNames) || notExistAlert(stationNames) || sameDepartArrivalAlert(stationNames);

  if (alertMsg !== "") {
    alert(alertMsg);

    return "";
  }

  return stationNames;
}

function validateRadioInput(radioInputs) {
  let checkedRadioInput = "";

  if (radioInputs[0].checked) {
    checkedRadioInput = SHORTEST_DISTANCE;
  } else if (radioInputs[1].checked) {
    checkedRadioInput = SHORTEST_TIME;
  }

  return checkedRadioInput;
}

export { validateStation, validateRadioInput };

import { notExistAlert, minimunLengthAlert } from "../search/alert.js";

function validateStation(stationName) {
  let alertMsg = minimunLengthAlert(stationName) || notExistAlert(stationName);

  if (alertMsg !== "") {
    alert(alertMsg);

    return "";
  }

  return stationName;
}

export { validateStation };

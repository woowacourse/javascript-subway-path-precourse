import { notExistAlert } from "../search/alert.js";

function validateStation(stationName) {
  let alertMsg = notExistAlert(stationName);

  if (alertMsg !== "") {
    alert(alertMsg);

    return "";
  }

  return stationName;
}

export { validateStation };

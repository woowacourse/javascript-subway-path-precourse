import { notExistAlert, minimunLengthAlert, sameDepartArrivalAlert } from "../search/alert.js";

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
    checkedRadioInput = "최단거리";
  } else if (radioInputs[1].checked) {
    checkedRadioInput = "최소시간";
  }

  return checkedRadioInput;
}

export { validateStation, validateRadioInput };

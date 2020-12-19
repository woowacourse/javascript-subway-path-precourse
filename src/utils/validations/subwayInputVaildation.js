import { isEmptyValue, isExistStation } from "./index.js";
import { alertMessage, clearInput } from "../domUtils.js";
import { MESSAGE } from "../constants/message.js";
import { NUM } from "../constants/num.js";

export const isVaildStationName = ($input, nameList, name) => {
  if (isEmptyValue(name)) {
    alertMessage($input, MESSAGE.EMPTY_NAME_ERROR);
    return false;
  }

  if (!isValidInputLength(name, NUM.STATION_NAME_LIMIT)) {
    alertMessage($input, MESSAGE.STATION_NAME_LIMIT_ERROR);
    return false;
  }

  if (!isExistStation(nameList, name)) {
    alertMessage($input, MESSAGE.NOT_FOUND_STATION_ERROR);
    return false;
  }

  return true;
};

export const isSameStation = (
  $inputDeparture,
  $inputArrival,
  departure,
  arrival,
) => {
  if (departure === arrival) {
    alert(MESSAGE.SAME_STATION_SELECT_ERROR);
    clearInput($inputArrival);
    clearInput($inputDeparture);
    return false;
  }

  return true;
};

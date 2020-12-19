import { isEmptyValue, isExistStation, isValidInputLength } from "./index.js";
import { alertMessage } from "../domUtils.js";
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

export const isSameStation = (departure, arrival) => {
  if (departure === arrival) {
    alert(MESSAGE.SAME_STATION_SELECT_ERROR);
    return true;
  }

  return false;
};

export const isExistPath = path => {
  if (!path.length) {
    alert(MESSAGE.NOT_FOUND_PATH_ERROR);
    return false;
  }

  return true;
};

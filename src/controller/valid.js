import {error_message} from '../constant/constant.js';

export const isInputValid = ($departureName, $arrivalName, stations) => {
  if (!isIncluded($departureName, stations)) {
    return false;
  }
  if (!isIncluded($arrivalName, stations)) {
    return false;
  }
  if (!isBothDifferent($departureName, $arrivalName)) {
    return false;
  }

  return true;
};

const isIncluded = ($name, stations) => {
  if (!stations.includes($name)) {
    return alert(error_message.NOT_STATION);
  }

  return true;
};

const isBothDifferent = (first, second) => {
  if (first === second) {
    return alert(error_message.SAME_STATION);
  }

  return true;
};

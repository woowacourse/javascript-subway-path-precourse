import { constants, alertMessage } from './consts.js';
import { stations } from './data.js';

export const validateStationName = (stationName) => {
  return isRightLength(stationName) && isExistInList(stationName);
};

const isRightLength = (name) => {
  if (name.length < constants.MINIMUM_STATION_NAME_LENGTH) {
    alert(alertMessage.SHORT_STATION_NAME_LENGTH);
    return false;
  }
  return true;
};

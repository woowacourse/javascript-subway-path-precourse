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

const isExistInList = (name) => {
  for (let i = 0; i < stations.length; i++) {
    if (stations[i].name === name) {
      return true;
    }
  }

  alert(alertMessage.NO_EXIST_IN_STATION_LIST);
  return false;
};

import { stations } from "../Data/data.js";
import { ERROR_MESSAGE, STATION_NAME_MIN_LENGTH } from "../Constants/Input.js";

const validateStationLength = stationUserInput => {
  if (stationUserInput.length < STATION_NAME_MIN_LENGTH) {
    throw Error(`${stationUserInput}: ${ERROR_MESSAGE.STATION_NAME_MIN_LENGTH}`);
  }
};

const validateStationExistence = stationUserInput => {
  if (!stations.includes(stationUserInput)) {
    throw Error(`${stationUserInput}: ${ERROR_MESSAGE.NO_STATION_EXISTENCE}`);
  }
};

export const isValidStationName = stationUserInput => {
  try {
    validateStationLength(stationUserInput);
    validateStationExistence(stationUserInput);
    
    return true;
  } catch (error) {
    alert(error.message);

    return false;
  }
};
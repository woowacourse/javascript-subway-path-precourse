import { stations } from "../Data/data.js";
import { ERROR_MESSAGE, STATION_NAME_MIN_LENGTH } from "../Constants/Input.js";
import { findShortestDistanceRoute } from "./DijkstraImplementation.js";

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

const validateDuplicatedStationNames = (departure, arrival) => {
  if (departure === arrival) {
    throw Error(`출발역: ${departure}, 도착역: ${arrival}\n${ERROR_MESSAGE.NO_DUPLICATED_STATION_NAMES}`);
  }
};

const isConnected = (departure, arrival) => {
  return findShortestDistanceRoute(departure, arrival) !== [];
};

const validateStationConnection = (departure, arrival) => {
  if (!isConnected(departure, arrival)) {
    throw Error(`출발역: ${departure}, 도착역: ${arrival}\n${ERROR_MESSAGE.NOT_CONNECTED_STATIONS}`);
  }
};

export const isValidRoute = (departure, arrival) => {
  try {
    validateDuplicatedStationNames(departure, arrival);
    validateStationConnection(departure, arrival);

    return true;    
  } catch (error) {
    alert(error.message);

    return false;
  }
}
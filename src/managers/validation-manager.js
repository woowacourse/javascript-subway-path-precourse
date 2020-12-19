import { appendContainer as updateContainer } from './../managers/view-manager.js';
import {
  ERROR_MESSAGES,
  STATION_NAME_LEN_LIMIT,
  STATIONS,
} from './../configuration.js';

export const validateStationNames = (departureName, arrivalName) => {
  return (
    validateOneStation(departureName) ||
    validateOneStation(arrivalName) ||
    validateRelationshipBetweenStations(departureName, arrivalName)
  );
};

const validateOneStation = (stationName) => {
  stationName = stationName.replace(' ', '');

  if (stationName.length === 0) {
    return 'STAION_NAME_ONLY_SPACE';
  }
  if (stationName.length < STATION_NAME_LEN_LIMIT) {
    return 'STAION_NAME_TOO_SHORT';
  }
  if (!STATIONS.includes(stationName)) {
    return 'STAION_NAME_NOT_EXIST';
  }
  return false;
};

const validateRelationshipBetweenStations = (departureName, arrivalName) => {
  if (departureName === arrivalName) {
    return 'BOTH_STAION_NAMES_SAME';
  }
  return false;
};

export const validatePath = (path) => {
  if (!path) {
    return 'STATIONS_NOT_CONNECTED';
  }
  return false;
};

export const processException = (exception) => {
  alert(ERROR_MESSAGES[exception]);
  updateContainer();
};

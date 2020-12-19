import { NUMBER } from '../constants/index.js';

export const isValidNameLength = (input) => {
  return input.length >= NUMBER.VALID_STATION_NAME_LENGTH;
};

export const isNameInStations = (stations, input) => {
  return stations.some((station) => station === input);
};

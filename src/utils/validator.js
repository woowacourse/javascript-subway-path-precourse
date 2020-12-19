import { STATION } from "../constants.js";
import { stations } from "../data/subwayInfo.js";

const isInStation = (station) => (stations.includes(station) ? true : false);

export const validator = (departure, arrival) => {
  let validateResult = true;
  if (
    departure.length < STATION.NAME_LENGTH_LIMIT ||
    arrival.length < STATION.NAME_LENGTH_LIMIT
  )
    validateResult = false;
  if (departure === arrival) validateResult = false;
  if (!isInStation(departure) || !isInStation(arrival)) validateResult = false;
  return validateResult;
};

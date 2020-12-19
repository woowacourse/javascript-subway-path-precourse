import { STATION } from "../constants.js";

export const validator = (departure, arrival) => {
  let validateResult = true;
  if (
    departure.length < STATION.NAME_LENGTH_LIMIT ||
    arrival.length < STATION.NAME_LENGTH_LIMIT
  )
    validateResult = false;
  return validateResult;
};

import { LIMIT, ERR_MESSAGE } from "./constants.js";
export const isValidateName = (name) => {
  if (name.trim().length < LIMIT.NAME_LIMIT) {
    return false;
  }
  return true;
};

export const isStation = (name, stations) => {
  const index = stations.findIndex((v) => v.name === name);
  if (index === -1) {
    return false;
  }
  return true;
};

export const checkValidate = (departure, arrival, stations) => {
  if (!isValidateName(departure) || !isValidateName(arrival)) {
    alert(ERR_MESSAGE.NAME_LIMIT_ERROR);
    return true;
  }
  if (departure === arrival) {
    alert(ERR_MESSAGE.SAME_INPUT);
    return true;
  }
  if (!isStation(departure, stations) || !isStation(arrival, stations)) {
    alert(ERR_MESSAGE.NO_STAION);
    return true;
  }
  return false;
};

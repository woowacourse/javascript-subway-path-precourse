import { constant } from "./constant.js";
export function isSatisfyLength(len) {
  if (String(len).length < constant.minLength) {
    return false;
  }

  return true;
}

export function isExistStation(stations, station) {
  for (let i = 0; i < stations.length; i++) {
    if (station === stations[i].name) {
      return true;
    }
  }

  return false;
}

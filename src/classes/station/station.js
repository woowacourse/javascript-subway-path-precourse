import { MIN_STATION_NAME_LENGTH } from '../../constants/constants.js';

export default class Station {
  static isStationNameTooShort(stationName) {
    return stationName.length < MIN_STATION_NAME_LENGTH;
  }

  static isStationNamesSame(startStationName, endStationName) {
    return startStationName === endStationName;
  }
}

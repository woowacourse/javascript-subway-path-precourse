import { MIN_STATION_NAME_LENGTH } from '../../constants/constants.js';

export default class Station {
  static isStationNameTooLong(stationName) {
    return stationName.length < MIN_STATION_NAME_LENGTH;
  }
}

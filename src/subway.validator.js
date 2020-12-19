import {ALERT} from './constants.js';

class SubwayValidator {
  isInputValid = (startStation, endStation, stations) => {
    if (startStation.length < 2 || endStation < 2) {
      alert(ALERT.MIN_LENGTH);
      return false;
    }

    if (!this.hasStations(stations, startStation) ||
        !this.hasStations(stations, endStation)) {
      alert(ALERT.NOT_EXIST);
      return false;
    }

    if (startStation === endStation) {
      alert(ALERT.DUPLICATION);
      return false;
    }

    return true;
  }

  hasStations(stations, station) {
    return stations.some((currentStation) => currentStation === station);
  }
}

const subwayValidator = new SubwayValidator();

export const {isInputValid} = subwayValidator;

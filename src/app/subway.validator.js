import {ALERT} from '../constants.js';

class SubwayValidator {
  isInputValid = (startStation, endStation, stations) => {
    if (startStation.length < 2 || endStation < 2) {
      alert(ALERT.MIN_LENGTH);
      return false;
    }

    if (!this.hasStations(startStation, stations) ||
        !this.hasStations(endStation, stations)) {
      alert(ALERT.NOT_EXIST);
      return false;
    }

    if (startStation === endStation) {
      alert(ALERT.DUPLICATION);
      return false;
    }

    return true;
  }

  hasStations(station, stations) {
    return stations.some((currentStation) => currentStation.name === station);
  }
}

const subwayValidator = new SubwayValidator();

export const {isInputValid} = subwayValidator;

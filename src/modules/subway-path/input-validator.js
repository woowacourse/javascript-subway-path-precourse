import {
  IS_LOWER_THAN_TWO_ALERT,
  IS_NOT_INCLUDED_ALERT,
  IS_SAME_ALERT,
  MIN_STATION_LENGTH,
  SUFFIX_ALERT,
} from '../../constants/constants.js';
import { STATIONS } from '../../data/subway.js';

export default class InputValidator {
  checkValidInputs(departure, arrival) {
    const stations = [departure.value, arrival.value];
    if (!this.isValidInputs(stations)) {
      this.alertByCase(stations);

      return false;
    }

    return true;
  }

  isValidInputs(stations) {
    return (
      !this.isSameStation(stations) &&
      this.isMoreThanTwoLength(stations) &&
      this.isIncludedStation(stations)
    );
  }

  isSameStation(stations) {
    return stations[0] === stations[1];
  }

  isMoreThanTwoLength(stations) {
    return stations.every(station => station.length >= MIN_STATION_LENGTH);
  }

  isIncludedStation(stations) {
    return stations.every(station => STATIONS.includes(station));
  }

  alertByCase(stations) {
    const cases = [];
    if (this.isSameStation(stations)) {
      cases.push(IS_SAME_ALERT);
    }
    if (!this.isMoreThanTwoLength(stations)) {
      cases.push(IS_LOWER_THAN_TWO_ALERT);
    }
    if (!this.isIncludedStation(stations)) {
      cases.push(IS_NOT_INCLUDED_ALERT);
    }
    alert(cases.join(', ') + SUFFIX_ALERT);
  }
}

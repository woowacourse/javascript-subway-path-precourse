import { stations } from './data/defaulData.js'
import { DepartureError, ArrivalError, NoStationError, SameStationError } from './data/Error.js'


export default class GetUserInput {
  constructor() {
    this.departure = document.getElementById('departure-station-name-input').value;
    this.arrival = document.getElementById('arrival-station-name-input').value;
    this.option = document.getElementsByName('search-type');
    this.minNameLength = 2;
  }

  isValid() {
    if (!(this.isValidLength(this.departure) && this.isInStations(this.departure))) {
      return DepartureError;
    }
    if (!(this.isValidLength(this.arrival) && this.isInStations(this.arrival))) {
      return ArrivalError;
    }
    if (this.isSameStation(this.departure, this.arrival)) {
      return SameStationError;
    }
    return 1;
  }

  isValidLength(name) {
    return name.length >= this.minNameLength;
  }

  isInStations(name) {
    let isIn = 0;
    stations.forEach((station) => {
      if (station.name === name) {
        isIn = 1;
        return;
      }
    })
    return isIn;
  }

  isSameStation(departure, arrival) {
    return departure === arrival;
  }
}
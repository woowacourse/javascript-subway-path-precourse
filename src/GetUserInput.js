import { stations } from './data/defaulData.js'
import { DepartureError, ArrivalError, NoStationError, SameStationError } from './data/Error.js'


export default class GetUserInput {
  constructor() {
    this.departure = document.getElementById('departure-station-name-input').value;
    this.arrival = document.getElementById('arrival-station-name-input').value;
    this.option = "";
    this.setOption();
    this.minNameLength = 2;
  }

  setOption() {
    const options = document.getElementsByName('search-type');
    options.forEach((option) => {
      if (option.checked) {
        this.option = option.value;
      }
    })
  }

  isValid() {
    if (!(this.isValidLength(this.departure))) {
      return DepartureError;
    }
    if (!(this.isValidLength(this.arrival))) {
      return ArrivalError;
    }
    if (!(this.isInStations(this.departure) && this.isInStations(this.arrival))) {
      return NoStationError;
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
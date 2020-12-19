import { stations } from './data/defaulData.js'

export default class GetUserInput {
  constructor() {
    this.departure = document.getElementById('departure-station-name-input').value;
    this.arrival = document.getElementById('arrival-station-name-input').value;
    this.option = document.getElementsByName('search-type');
    this.minNameLength = 2;
  }

  isValidLength(name) {
    return name.length >= this.minNameLength;
  }

  isInStations(name) {
    return stations.indexOf(name);
  }

  isSameStation(departure, arrival) {
    return departure === arrival;
  }
}
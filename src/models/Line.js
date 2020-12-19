export default class Line {
  constructor(name) {
    this.name = name;
    this.stations = [];
  }

  addStation(station) {
    this.stations.push(station);
  }
}

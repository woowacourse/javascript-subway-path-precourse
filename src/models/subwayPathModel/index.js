import { stations, courses } from '../../constants';

export default class subwayPathModel {
  constructor() {
    this.stations = stations;
    this.courses = courses;
    this.startStation = null;
    this.endStation = null;
  }

  getStartStation() {
    return this.startStation;
  }

  setStartStation(startStation) {
    this.startStation = startStation;
  }

  getEndStation() {
    return this.endStation;
  }

  setEndStation(endStation) {
    this.endStation = endStation;
  }
}

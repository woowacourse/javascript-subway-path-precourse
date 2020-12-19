import { message } from '../../constants';

export default class SubwayPathViewModel {
  constructor(model) {
    this.model = model;
  }

  searchPath(startStation, endStation, how) {
    const errorMessage = this.validStation(startStation, endStation);

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    if (how === 'searchShortestPath') {
      this.model.setDataToDijkstraForShortestPath();
      return this.model.findShortestPath(startStation, endStation);
    }

    if (how === 'searchMinumumTimePath') {
      this.model.setDataToDijkstraForMinimumTimePath();
      return this.model.findMinimumTimePath(startStation, endStation);
    }
  }

  validStation(startStation, endStation) {
    if (startStation.length < 2 || endStation.length < 2) {
      return message.SHORTER_THAN_TWO;
    }

    if (startStation === endStation) {
      return message.OVERLAPTED_STATION;
    }

    if (!this.isInCourses(startStation, endStation)) {
      return message.IS_NOT_IN_COURSES;
    }
  }

  isInCourses(startStation, endStation) {
    const foundStartStation = this.model.getStations().filter(station => {
      return startStation === station;
    });
    const foundEndStation = this.model.getStations().filter(station => {
      return endStation === station;
    });

    if (foundStartStation.length !== 0 && foundEndStation.length !== 0) {
      return true;
    }
  }
}

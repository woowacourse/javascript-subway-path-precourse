import StationModel from '../models/StationModel.js';
import LineModel from '../models/LineModel.js';
import ResultView from '../views/ResultView.js';
import Dijkstra from '../utils/Dijkstra.js';
import { lines, stations, paths } from '../data.js';
import { MINIMUM_INPUT_LENGTH } from '../constants.js';
import {
  INVALID_NAME_LENGTH_MESSAGE,
  NO_STATION_DATA_MESSAGE,
  SAME_STATION_MESSAGE,
  INVALID_SEARCH_TYPE,
} from '../messages.js';

export default class AppController {
  constructor() {
    this.stationModel = new StationModel(stations);
    this.lineModel = new LineModel(lines);
    this.resultView = new ResultView();
    this.graphs = {
      shortestDistance: new Dijkstra(),
      minimalTime: new Dijkstra(),
    };
    this.elements = {
      subwayPathFinderForm: document.querySelector('#subway-path-finder-form'),
    };

    this.initializePath(paths);
    this.setEventListener();
  }

  initializePath(initialPaths) {
    initialPaths.forEach((path) => {
      const { from, to, distance, time } = path;

      this.graphs.shortestDistance.addEdge(from, to, distance);
      this.graphs.minimalTime.addEdge(from, to, time);
    });
  }

  getFormData() {
    const formElements = {
      departureStationNameInput: document.querySelector('#departure-station-name-input'),
      arrivalStationNameInput: document.querySelector('#arrival-station-name-input'),
      searchTypeInput: document.querySelector('input[name="search-type"]:checked'),
    };

    const formData = {
      departureStationName: formElements.departureStationNameInput.value,
      arrivalStationName: formElements.arrivalStationNameInput.value,
      searchType: formElements.searchTypeInput.value,
    };

    return formData;
  }

  isExistStation(name) {
    return this.stationModel.data.includes(name);
  }

  validateSearchType(type) {
    if (!(type === 'shortest-distance' || type === 'minimum-time')) {
      throw new Error(INVALID_SEARCH_TYPE);
    }
  }

  validateStations(departureStationName, arrivalStationName) {
    if (departureStationName.length < MINIMUM_INPUT_LENGTH || arrivalStationName.length < MINIMUM_INPUT_LENGTH) {
      throw new Error(INVALID_NAME_LENGTH_MESSAGE);
    }

    if (!this.isExistStation(departureStationName) || !this.isExistStation(arrivalStationName)) {
      throw new Error(NO_STATION_DATA_MESSAGE);
    }

    if (departureStationName === arrivalStationName) {
      throw new Error(SAME_STATION_MESSAGE);
    }
  }

  validateFormData(formData) {
    const { departureStationName, arrivalStationName, searchType } = formData;

    try {
      this.validateSearchType(searchType);
      this.validateStations(departureStationName, arrivalStationName);
    } catch (err) {
      alert(err.message);
      return false;
    }

    return true;
  }

  getTotalDistanceTime(path) {
    let totalDistance = 0;
    let totalTime = 0;

    for (let i = 1; i < path.length; i++) {
      const result = paths.find(({ from, to }) => path[i - 1] === from && path[i] === to);
      totalDistance += result.distance;
      totalTime += result.time;
    }

    const total = {
      distance: totalDistance,
      time: totalTime,
    };

    return total;
  }

  findShortestDistancePath(departureStationName, arrivalStationName) {
    const path = this.graphs.shortestDistance.findShortestPath(departureStationName, arrivalStationName);
    const { distance, time } = this.getTotalDistanceTime(path);
    this.resultView.render(path, distance, time);
  }

  findMinimumTimePath() {
    console.log('findMinimumTimePath');
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = this.getFormData();
    const { departureStationName, arrivalStationName, searchType } = formData;

    if (!this.validateFormData(formData)) {
      return;
    }

    if (searchType === 'shortest-distance') {
      this.findShortestDistancePath(departureStationName, arrivalStationName);
    } else if (searchType === 'minimum-time') {
      this.findMinimumTimePath(departureStationName, arrivalStationName);
    }
  }

  setEventListener() {
    this.elements.subwayPathFinderForm.addEventListener('submit', this.handleSubmit.bind(this));
  }
}

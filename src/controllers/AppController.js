import StationModel from '../models/StationModel.js';
import LineModel from '../models/LineModel.js';
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

  findShortestDistancePath() {
    console.log('findShortestDistancePath');
  }

  findMinimumTimePath() {
    console.log('findMinimumTimePath');
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = this.getFormData();
    const { searchType } = formData;

    if (!this.validateFormData(formData)) {
      return;
    }

    if (searchType === 'shortest-distance') {
      this.findShortestDistancePath();
    } else if (searchType === 'minimum-time') {
      this.findMinimumTimePath();
    }
  }

  setEventListener() {
    this.elements.subwayPathFinderForm.addEventListener('submit', this.handleSubmit.bind(this));
  }
}

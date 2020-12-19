import SearchPathInputFormView from '../views/SearchPathInputFormView.js';
import ResultSearchPathView from '../views/SearchPathResultView.js';

import StationModel from '../models/StationModel.js';
import StationDistanceModel from '../models/StationDistanceModel.js';
import StationTimeModel from '../models/StationTimeModel.js';

import { Lines2, Lines3, LineSinbundang } from '../utils/data.js';
import { SEARCH_PATH_TYPE } from '../utils/constants.js';
import stationInputValidator from '../utils/stationInputValidator.js';

export default class MainController {
  init() {
    this.initStation();

    this.searchPathInputForm = new SearchPathInputFormView()
      .setup(document.querySelector('#input-search-station-container'))
      .on('submitSearchInputValue', (e) => this.onSubmitSearchInputHandler(e.detail))
      .on('onChangeSelector', (e) => this.onChangeSelectorHandler(e.detail));

    this.resultSearchPath = new ResultSearchPathView()
      .setup(document.querySelector('#path-search-result-container'))
      .hide();

    this.selectPathType = SEARCH_PATH_TYPE.MIN_DISTANCE;
    this.stationTimeModel = new StationTimeModel();
    this.stationDistanceModel = new StationDistanceModel();
  }

  initStation() {
    this.stationmodel = new StationModel();

    this.createStation(Lines2);
    this.createStation(Lines3);
    this.createStation(LineSinbundang);
  }

  createStation(Line) {
    Line.forEach((station) => {
      if (!this.stationmodel.getStationByName(station.stationName)) {
        this.stationmodel.createStation(station.id, station.stationName, station.line);
      } else {
        this.stationmodel.addLIne(station.stationName, station.line);
      }
    });
  }

  findPath(departureStationName, arrivalStationName) {
    this.selectPathType === SEARCH_PATH_TYPE.MIN_DISTANCE
      ? this.getShortestDistancePath(departureStationName, arrivalStationName)
      : this.getShortestTimePath(departureStationName, arrivalStationName);
  }

  getShortestDistancePath(departureStationName, arrivalStationName) {
    const shortestDistancePath = this.stationDistanceModel.getShortestDistancePath(
      departureStationName,
      arrivalStationName
    );
    const totalShortestDistance = this.stationDistanceModel.getTotalDistance(shortestDistancePath);
    const totalTime = this.stationTimeModel.getTotalTime(shortestDistancePath);
    this.renderResultView(shortestDistancePath, totalShortestDistance, totalTime);
  }

  getShortestTimePath(departureStationName, arrivalStationName) {
    const shortestTimePath = this.stationTimeModel.getShortestTimePath(
      departureStationName,
      arrivalStationName
    );
    console.log(this.stationTimeModel.getTotalTime(shortestTimePath));
    const totalShortestTime = this.stationTimeModel.getTotalTime(shortestTimePath);
    const totalDistance = this.stationDistanceModel.getTotalDistance(shortestTimePath);
    this.renderResultView(shortestTimePath, totalDistance, totalShortestTime);
  }

  renderResultView(path, totalDistance, totalTime) {
    this.resultSearchPath.renderSearchPathResult(
      path,
      totalDistance,
      totalTime,
      this.selectPathType
    );
    this.resultSearchPath.show();
  }

  isValidStation(departureStationName, arrivalStationName) {
    this.departureStationName = departureStationName.trim();
    this.arrivalStationName = arrivalStationName.trim();

    stationInputValidator(
      this.departureStationName,
      this.arrivalStationName,
      this.stationmodel.getStationNames()
    )
      ? this.findPath(departureStationName, arrivalStationName)
      : this.searchPathInputForm.resetInputForm();
  }

  onSubmitSearchInputHandler({ departureStationName, arrivalStationName }) {
    this.isValidStation(departureStationName, arrivalStationName);
  }

  onChangeSelectorHandler(targetId) {
    this.selectPathType = targetId;
    this.findPath(this.departureStationName, this.arrivalStationName);
  }
}

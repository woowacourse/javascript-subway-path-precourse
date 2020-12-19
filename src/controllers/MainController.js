import SearchPathInputForm from '../views/SearchPathInputForm.js';
import StationModel from '../models/StationModel.js';

import { Lines2, Lines3, LineSinbundang } from '../utils/data.js';
import stationInputValidator from '../utils/stationInputValidator.js';

const tag = `[MainController]`;
export default class MainController {
  init() {
    console.log(`${tag} init`);
    this.stationmodel = new StationModel();
    this.createStation(Lines2);
    this.createStation(Lines3);
    this.createStation(LineSinbundang);

    this.searchPathInputForm = new SearchPathInputForm()
      .setup(document.querySelector('#input-search-station-container'))
      .on('submitSearchInputValue', (e) => this.onSubmitSearchInputHandler(e.detail));
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

  isValidStation(departureStationName, arrivalStationName) {
    this.departureStationName = departureStationName.trim();
    this.arrivalStationName = arrivalStationName.trim();

    stationInputValidator(
      this.departureStationName,
      this.arrivalStationName,
      this.stationmodel.getStationNames()
    )
      ? console.log('통과')
      : this.searchPathInputForm.resetInputForm();
  }

  onSubmitSearchInputHandler({ departureStationName, arrivalStationName, searchType }) {
    this.isValidStation(departureStationName, arrivalStationName);
    console.log(searchType);
  }
}

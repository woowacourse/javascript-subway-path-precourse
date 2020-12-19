import GetUserInput from "./GetUserInput.js";
import StationPathModel from "./StationPathModel.js";
import StationPathView from "./StationPathView.js";
import { NotLinkedError } from "./data/Error.js";

export default class StationPathController {
  constructor () {
    this.stationPathView = new StationPathView();
    this.stationPathModel = new StationPathModel();
  }

  eventHandler() {
    document.addEventListener('click', (event) => {
      const id = event.target.id;
      if (id === 'search-button') {
        this.searchButtonClick();
      }
    })
  }

  searchButtonClick() {
    const userInput = new GetUserInput();
    if (userInput.isValid() !== 1) {
      this.stationPathView.alertError(userInput.isValid());
      return;
    }
    const lines = this.stationPathModel.findLines(userInput.departure, userInput.arrival);
    let path = [];
    path = this.stationPathModel.getShortestPath(userInput.option, userInput.departure, userInput.arrival);
    if (path === undefined) {
      this.stationPathView.alertError(NotLinkedError)
      return;
    }
    this.stationPathView.resultView(this.stationPathModel.getDistance(lines, path),
      this.stationPathModel.getTime(lines, path), path);
  }
}
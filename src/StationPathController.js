import GetUserInput from "./GetUserInput.js";
import StationPathModel from "./StationPathModel.js";
import StationPathView from "./StationPathView.js";
import { NotLinkedError } from "./data/Error.js";

export default class StationPathController {
  constructor () {

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
    const view = new StationPathView();
    const userInput = new GetUserInput();
    if (userInput.isValid() !== 1) {
      view.alertError(userInput.isValid());
      return;
    }
    const stationPathModel = new StationPathModel();
    const lines = stationPathModel.findLines(userInput.departure, userInput.arrival);
    if (lines.length === 0) {
      view.alertError(NotLinkedError)
      return;
    }
    let path = [];
    if (userInput.option === 'shortest-path') {
      path = stationPathModel.getShortestDistancePath(userInput.departure, userInput.arrival);
    }
    if (userInput.option === 'shortest-time') {
      path = stationPathModel.getShortestTimePath(userInput.departure, userInput.arrival);
    }
    const distance = stationPathModel.getDistance(lines[0], path);
    const time = stationPathModel.getTime(lines[0], path);
    view.resultView(distance, time, path[0]);
  }
}
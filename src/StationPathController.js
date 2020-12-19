import GetUserInput from "./GetUserInput.js";
import StationPathModel from "./StationPathModel.js";
import StationPathView from "./StationPathView.js";

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
    const userInput = new GetUserInput();
    if (userInput.isValid() !== 1) {
      alert(userInput.isValid())
      return;
    }
    const stationPathModel = new StationPathModel();
    const lines = stationPathModel.findLines(userInput.departure, userInput.arrival);
    if (lines.length === 0) {
      alert("두 역이 연결되어 있지 않습니다.")
      return;
    }
    let path;
    if (userInput.option === 'distance') {
      path = stationPathModel.getShortestDistancePath(userInput.departure, userInput.arrival);
    }
    if (userInput.option === 'time') {
      path = stationPathModel.getShortestTimePath(userInput.departure, userInput.arrival);
    }
      console.log(path)
    const view = new StationPathView();
    const distance = stationPathModel.getDistance(lines[0], path);
    const time = stationPathModel.getTime(lines[0], path);
  }
}
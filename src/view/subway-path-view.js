import { ID, TEMPLATE } from "../common/const.js";
import { makeElement } from "../utils/html-maker.js";
import View from "./view.js";

export default class SubwayPathView extends View {
  constructor(containerID) {
    super(containerID);
    this.nameInputView = null;
    this.resultPrintView = null;
  }
  setInitialView() {
    const nameInputContainer = makeElement({
      id: ID.STATION_NAME_INPUT_CONTINAER,
    });
    const resultPrintContainer = makeElement({
      id: ID.RESULT_PRINT_CONTAINER,
    });
    this.appendChildsByID(this._containerID, [
      nameInputContainer,
      resultPrintContainer,
    ]);
    this.nameInputView = new NameInputView(ID.STATION_NAME_INPUT_CONTINAER);
  }
  setResultPrintView(dijkstraResult) {
    this.resultPrintView = new ResultPrintView(
      ID.RESULT_PRINT_CONTAINER,
      dijkstraResult
    );
  }
}

class NameInputView extends View {
  constructor(containerID) {
    super(containerID);
    this.setInitialView();
  }
  setInitialView() {
    this.setContainerByID(this._containerID, TEMPLATE.STATION_NAME_INPUT);
  }
}

class ResultPrintView extends View {
  constructor(containerID, dijkstraResult) {
    super(containerID);
    this.dijkstraResult = dijkstraResult;
    this.setInitialView();
  }
  setInitialView() {
    this.setContainerByID(this._containerID, TEMPLATE.RESULT_PRINT);
  }
}

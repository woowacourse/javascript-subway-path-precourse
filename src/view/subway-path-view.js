import { ID, TEMPLATE } from "../common/const.js";
import { makeElement } from "../utils/html-maker.js";
import View from "./view.js";

export default class SubwayPathView extends View {
  constructor(containerID) {
    super(containerID);
    this.setInitialView();
    new NameInputView(ID.STATION_NAME_INPUT_CONTINAER);
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
  }
}

class NameInputView extends View {
  constructor(containerID){
    super(containerID);
    this.setInitialView();
  }
  setInitialView() {
    this.setContainerByID(this._containerID, TEMPLATE.STATION_NAME_INPUT);
  }
}

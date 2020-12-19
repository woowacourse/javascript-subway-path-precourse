import { ID, TEMPLATE, TABLE_HEADER, CSS, VALUE } from "../common/const.js";
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
  setResultPrintView(dijkstraResult, radioOption) {
    this.resultPrintView = new ResultPrintView(
      ID.RESULT_PRINT_CONTAINER,
      dijkstraResult,
      radioOption
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
  constructor(containerID, dijkstraResult, radioOption) {
    super(containerID);
    this.dijkstraResult = dijkstraResult;
    this.setInitialView(radioOption);
  }
  setInitialView(radioOption) {
    if (radioOption === VALUE.DISTANCE) {
      this.setContainerByID(this._containerID, TEMPLATE.DISTANCE_RESULT_PRINT);
    } else if (radioOption === VALUE.DURATION) {
      this.setContainerByID(this._containerID, TEMPLATE.DURATION_RESULT_PRINT);
    }
    this.setTableRow();
  }

  setTableRow() {
    this.setContainerByID(ID.RESULT_TABLE, this._makeTableRow());
  }
  _makeTableRow() {
    return `
    ${TABLE_HEADER}
    <tr>
      <td>${this.dijkstraResult.distance}km</td>
      <td>${this.dijkstraResult.duration}분</td>
    </tr>
    <tr>
      <td colspan ="${CSS.TABLE_COLSPAN}">${this.dijkstraResult.route.join(
      "->"
    )}</td>
    </tr>
    `;
  }
}

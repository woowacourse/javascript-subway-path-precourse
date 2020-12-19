import { ID, NAME, VALUE } from "../common/const.js";
import Controller from "./controller.js";

export default class SubwayPathController extends Controller {
  constructor(view, models) {
    super(view, models);
    this._view.setInitialView();
    new NameInputController(this._view, this._models);
  }
}

class NameInputController extends Controller {
  constructor(view, models) {
    super(view, models);
    this._addEventToSearchButton();
  }

  _addEventToSearchButton() {
    this.addClickEventByID(ID.SEARCH_BUTTON, () => {
      const departureStation = this.getInputValueByID(
        ID.DEPARTURE_STATION_NAME_INPUT
      );
      const arrivalStation = this.getInputValueByID(
        ID.ARRIVAL_STATION_NAME_INPUT
      );
      const selectedOption = this.getSelectedRadioOptionByName(
        NAME.SEARCH_TYPE
      );
      if (selectedOption === VALUE.DISTANCE) {
        const result = this._models.getMinDistance(
          departureStation,
          arrivalStation
        );
        this._view.setResultPrintView(result);
      }
    });
  }
}

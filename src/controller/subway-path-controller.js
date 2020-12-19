import {
  ERROR_MESSAGE,
  ID,
  INPUT_LIMIT,
  NAME,
  VALUE,
} from "../common/const.js";
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
  updateResultPrintView(departure, arrival) {
    const selectedOption = this.getSelectedRadioOptionByName(NAME.SEARCH_TYPE);
    if (selectedOption === VALUE.DISTANCE) {
      const result = this._models.getMinDistance(departure, arrival);
      this._view.setResultPrintView(result, VALUE.DISTANCE);
    } else if (selectedOption === VALUE.DURATION) {
      const result = this._models.getMinDuration(departure, arrival);
      this._view.setResultPrintView(result, VALUE.DURATION);
    }
  }

  _addEventToSearchButton() {
    this.addClickEventByID(ID.SEARCH_BUTTON, () => {
      const departure = this.getInputValueByID(ID.DEPARTURE_STATION_NAME_INPUT);
      const arrival = this.getInputValueByID(ID.ARRIVAL_STATION_NAME_INPUT);
      try {
        this._verifyInputStationNames(departure, arrival);
      } catch (error) {
        alert(error);
        return;
      }
      this.updateResultPrintView(departure, arrival);
    });
  }

  _verifyInputStationNames(departure, arrival) {
    if (departure === arrival) {
      throw ERROR_MESSAGE.SAME_DEPARTURE_TO_ARRIVAL;
    }
    if (
      departure.length < INPUT_LIMIT.MIN_STATION_NAME_LENGTH ||
      arrival.length < INPUT_LIMIT.MIN_STATION_NAME_LENGTH
    ) {
      throw ERROR_MESSAGE.MIN_STATION_NAME_LENGTH;
    }
  }
}

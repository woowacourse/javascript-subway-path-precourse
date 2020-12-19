import UserInput from "./userInput.js";
import { MIN_LENGTH_STATION } from "../../common/constants.js";
import {
  SHORT_INPUT_ERROR,
  EMPTY_INPUT_ERROR,
  NOT_CHECKED_ERROR,
  SAME_STATION_ERROR,
} from "../../common/errorMessages.js";
import spaceRegex from "./spaceRegex.js";

const inputResult = (ok, message) => ({ ok, message });

export default class InputValidation extends UserInput {
  constructor(props) {
    super(props);
    this.isEmptyInput = !this.startStation || !this.endStation;
    this.isShortInput =
      this.startStation.length < MIN_LENGTH_STATION ||
      this.endStation.length < MIN_LENGTH_STATION;
    this.isNotChecked = !this.shortestPathChecked && !this.fastestPathChecked;
    this.sameStationsInputed = this.startStation === this.endStation;
  }

  // 역
  getResult() {
    if (this.isEmptyInput) return inputResult(false, EMPTY_INPUT_ERROR);
    if (this.isShortInput) return inputResult(false, SHORT_INPUT_ERROR);
    if (this.isNotChecked) return inputResult(false, NOT_CHECKED_ERROR);
    if (this.sameStationsInputed) return inputResult(false, SAME_STATION_ERROR);

    return inputResult(true);
  }
}

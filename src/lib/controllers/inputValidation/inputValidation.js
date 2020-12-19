import UserInput from "./userInput.js";
import {
  EMPTY_INPUT_ERROR,
  NOT_CHECKED_ERROR,
  SAME_STATION_ERROR,
} from "../../common/errorMessages.js";
import spaceRegex from "./spaceRegex.js";

const inputResult = (ok, message) => ({ ok, message });

export default class InputValidation extends UserInput {
  // userInput 상속
  constructor(props) {
    super(props);
    this.isEmptyInput = !this.startStation || !this.endStation;
    this.isNotChecked = !this.shortestPathChecked && !this.fastestPathChecked;
    this.sameStationsInputed = this.startStation === this.endStation;
  }

  // 역
  getResult() {
    if (this.isEmptyInput) return inputResult(false, EMPTY_INPUT_ERROR);
    if (this.isNotChecked) return inputResult(false, NOT_CHECKED_ERROR);
    if (this.sameStationsInputed) return inputResult(false, SAME_STATION_ERROR);

    return inputResult(true);
  }
}

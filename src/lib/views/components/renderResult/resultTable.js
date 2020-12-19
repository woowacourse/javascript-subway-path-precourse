import UserInput from "../../../controllers/inputValidation/userInput.js";
import {
  TOTAL_DISTANCE_TEXT,
  TOTAL_TIME_DIST,
} from "../../../common/constants.js";

export default class ResultTable extends UserInput {
  constructor(props) {
    super(props);
    this.element = document.createElement("table");
    this.element.appendChild(this._getTableHead());
  }

  _getTableHeaderText() {
    return [TOTAL_DISTANCE_TEXT, TOTAL_TIME_DIST].reduce(
      (trInnerHtml, headerTitle) => trInnerHtml + `<th>${headerTitle}</th>`,
      "",
    );
  }

  _getTableHead() {
    const $tableHead = document.createElement("thead");
    $tableHead.innerHTML = `<tr>${this._getTableHeaderText()}</tr>`;
    return $tableHead;
  }
}

import { RESULT } from '../share/constants.js';
import { resultTableTemplate } from '../template/resultTableTemplate.js';

export default class ResultTable {
  constructor() {
    this.container = document.querySelector(`#${RESULT.CONTAINER}`);
    this.resultHeader = document.querySelector(`#${RESULT.RESULT_HEADER}`);
    this.resultTableBody = document.querySelector(
      `#${RESULT.RESULT_TABLE_BODY}`,
    );
  }

  render(values) {
    this.container.innerHTML = resultTableTemplate(values);
  }
}

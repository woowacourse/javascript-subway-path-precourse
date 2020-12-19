import { INIT, RESULT, RESULT_TABLE_HEADER } from "./constants/skeleton.js";

export default class View {
  handleException = null;
  findShortest = null;

  constructor() {
    this.initialize();
    this.submitSearchListener();
  }

  initialize() {
    const appEl = document.getElementById("app");
    appEl.innerHTML = INIT;
  }

  submitSearchListener() {
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener(
      "submit",
      (event) => {
        this.searchFormSubmitEvent(event, this.getSearchType(searchForm));
      },
      false
    );
  }

  getSearchType(searchForm) {
    const form = new FormData(searchForm);
    let searchType = "";
    for (const entry of form) {
      searchType = entry[1];
    }
    return searchType;
  }

  searchFormSubmitEvent(event, searchType) {
    event.preventDefault();
    const startStationValue = document.getElementById(
      "departure-station-name-input"
    ).value;
    const endStationValue = document.getElementById(
      "arrival-station-name-input"
    ).value;
    if (this.handleException(startStationValue, endStationValue)) {
      return;
    }
    this.renderResult(
      ...this.findShortest(startStationValue, endStationValue, searchType)
    );
  }

  renderResult(distance, time, sectionTexts, searchTypeText) {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = RESULT;
    const typeTitle = document.getElementById("type-title");
    typeTitle.innerText = searchTypeText;
    const resultTableBody = document.getElementById("result-table-body");
    resultTableBody.innerHTML =
      RESULT_TABLE_HEADER +
      `<tr>
        <td class="center-text">${distance}km</td>
        <td class="center-text">${time}분</td>
      </tr>
      <tr>
        <td colspan="100%">${sectionTexts}</td>
      </tr>`;
  }
}

import { TITLE_TEXT, UNITS } from "../utils/constants.js";

export default class SearchResult {
  constructor({ $target, searchType }) {
    this.$container = document.createElement("div");
    $target.append(this.$container);

    this.searchType = searchType;
    this.searchResult = {
      path: [],
      distance: 0,
      time: 0,
    };

    this.render();
  }

  getShortestPathString = () => {
    if (this.searchResult.path.length === 0) {
      return "검색 결과가 없습니다";
    }

    return this.searchResult.path.join("->");
  };

  setState = ({ nextSearchType, nextSearchResult }) => {
    this.searchType = nextSearchType;
    this.searchResult = nextSearchResult;

    this.render();
  };

  getTableTitle = () => {
    let title = "";

    switch (this.searchType) {
      case "distance":
        title = "최단거리";
        break;

      case "time":
        title = "최단시간";
        break;
    }

    return title;
  };

  render = () => {
    this.$container.innerHTML = `
      <h2>${TITLE_TEXT.searchResult}</h2>
      <h3>${this.getTableTitle()}</h3>
      <table>
        <thead>
          <tr>
            <th>총 거리</th>
            <th>총 소요 시간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${this.searchResult.distance} ${UNITS.distance}</td>
            <td>${this.searchResult.time} ${UNITS.time}</td>
          </tr>
          <tr >
            <td colspan="2">${this.getShortestPathString()}</td>
          </tr>
        </tbody>
      </table>
    `;
  };
}

import { TITLE_TEXT, UNITS } from "../utils/constants.js";

export default class SearchResult {
  constructor({ $target, searchType, findShortestPathWithDistance, findShortestPathWithTime }) {
    this.$container = document.createElement("div");
    $target.append(this.$container);

    this.searchType = searchType;
    this.shortestPath = [];
    this.findShortestPathWithDistance = findShortestPathWithDistance;
    this.findShortestPathWithTime = findShortestPathWithTime;

    this.render();
  }

  getShortestPathString = () => {
    if (this.shortestPath === []) {
      return "";
    }

    return this.shortestPath.join("->");
  };

  setState = ({ nextSearchType, nextShortestPath }) => {
    this.searchType = nextSearchType;
    this.shortestPath = nextShortestPath;

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
            <td>${UNITS.distance}</td>
            <td>${UNITS.time}</td>
          </tr>
          <tr >
            <td colspan="2">${this.getShortestPathString()}</td>
          </tr>
        </tbody>
      </table>
    `;
  };
}

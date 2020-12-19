import { TITLE_TEXT, UNITS } from "../utils/constants.js";

export default class SearchResult {
  constructor({ $target }) {
    this.$container = document.createElement("div");
    $target.append(this.$container);

    this.render();
  }

  render = () => {
    this.$container.innerHTML = `
      <h2>${TITLE_TEXT.searchResult}</h2>
      <h3>최단거리</h3>
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
            <td colspan="2">경로</td>
          </tr>
        </tbody>
      </table>
    `;
  };
}

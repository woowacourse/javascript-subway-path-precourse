import { message } from "../constants/constant.js";

class SubwayPathView {
  constructor({ subwayPath }) {
    this.subwayPath = subwayPath;
    this.handleButtonClick();
  }

  createResultTemplate = (option, pathLength, pathTime, path) => {
    return `
    <h1>📝 결과</h1>
    <h2>${option}</h2>
    <table border=2 style="text-align: center;">
        <th>총 거리</th>
        <th>총 소요 시간</th>
        <tr>
            <td>${pathLength}km</td>
            <td>${pathTime}분</td>
        </tr>
        <tr>
            <td colspan="2">${path.join("🡆")}</td>
        </tr>
    </table>
    `;
  };

  renderResult = (option, pathLength, pathTime, path) => {
    const resultContainer = document.getElementById("subway-path-output");
    resultContainer.innerHTML = "";
    resultContainer.innerHTML += this.createResultTemplate(
      option,
      pathLength,
      pathTime,
      path
    );
  };

  getSearchPathInput = () => {
    const departure = document.getElementById("departure-station-name-input")
      .value;
    const arrival = document.getElementById("arrival-station-name-input").value;
    const option = document.querySelector("input[name='search-type']:checked")
      .value;

    return { departure, arrival, option };
  };

  manageSearchPath = () => {
    const { departure, arrival, option } = this.getSearchPathInput();
    if (this.subwayPath.checkVaild(departure, arrival)) {
      const path = this.subwayPath.searchPath(departure, arrival, option);
      const { pathLength, pathTime } = this.subwayPath.countPathLengthAndTime(
        path
      );
      this.renderResult(option, pathLength, pathTime, path);
    }
  };

  handleButtonClick = () => {
    const searchBtn = document.getElementById("search-button");
    searchBtn.addEventListener("click", this.manageSearchPath);
  };
}

export default SubwayPathView;

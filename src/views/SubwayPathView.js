import { message } from "../constants/constant.js";

class SubwayPathView {
  constructor({ subwayPath }) {
    this.subwayPath = subwayPath;
    this.handleButtonClick();
  }

  createResultTemplate = (option, pathLength, pathTime, path) => {
    return `
    <h1>결과</h1>
    <h2>${option}</h2>
    <table border=2>
        <th>총 거리</th>
        <th>총 소요 시간</th>
        <tr>
            <td>${pathLength}</td>
            <td>${pathTime}</td>
        </tr>
        <tr>
            <td>${path}</td>
        </tr>
    </table>
    `;
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
      console.log(this.subwayPath.countPathLengthAndTime(path));
    }
  };

  handleButtonClick = () => {
    const searchBtn = document.getElementById("search-button");
    searchBtn.addEventListener("click", this.manageSearchPath);
  };
}

export default SubwayPathView;

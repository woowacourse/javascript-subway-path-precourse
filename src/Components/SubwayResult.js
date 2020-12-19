import { createPathResult } from "../utils/util.js";

class SubwayResult {
  constructor($target) {
    this.$target = $target;
  }

  render = ({ totalDistance, totalTime, path }) => {
    this.$target.innerHTML = `
    <table border="1">
        <tr>
          <th>총 거리</th>
          <th>총 소요시간</th>
        </tr>
        <tr>
          <td>${totalDistance}km</td>
          <td>${totalTime}분</td>
        <tr>
        <tr>
          <td colspan="2">${createPathResult(path)}</td>
        </tr>
    </table>
    `;
  };
}

export default SubwayResult;

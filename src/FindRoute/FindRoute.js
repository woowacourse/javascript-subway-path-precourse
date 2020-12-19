import Component from "../Core/Component.js";
import Dijkstra from "../utils/Dijkstra.js";
import { stationData, stationNameArray } from "../StationData/stationData.js";
import {
  isMoreThanTwoWords,
  existStationName,
  isDiffrentStationName,
  haveSpaceInName,
} from "../utils/validateStationName.js";

export default class FindRoute extends Component {
  constructor() {
    super();
    this.state = {
      start: "",
      end: "",
      method: null,
    };
  }
  render() {
    return `
          <h2>🚇 지하철 길찾기</h2>
          <div>
              <span>출발역</span>
              <input type="text" id="departure-station-name-input">
          </div>
          <div>
              <span>도착역</span>
              <input type="text" id="arrival-station-name-input">
          </div>
          <div>
          <input type="radio" name="search-type">
          <span>최단거리</span>
          <input type="radio" name="search-type">
          <span>최소시간</span>
          </div>
          <button id="search-button">길 찾기</button>
          <div>
              <h3>결과</h3>
              <h4>최소시간</h4>
              <table>
                  <thead>
                      <tr>
                          <td>총 거리</td>
                          <td>총 소요 시간</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>5km</td>
                          <td>4분</td>
                      </tr>
                      <tr>
                          <td colspan="2">교대 → 강남</td>
                          
                      </tr>
                  </tbody>
              </table>
          </div>`;
  }
}

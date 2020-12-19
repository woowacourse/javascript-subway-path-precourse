import Component from "../Core/Component.js";
import Dijkstra from "../utils/Dijkstra.js";
import { stationData, stationNameArray } from "../StationData/stationData.js";
import {
  isMoreThanTwoWords,
  existStationName,
  isDiffrentStationName,
  haveSpaceInName,
} from "../utils/validateStationName.js";
import { ERROR } from "../utils/error.js";
export default class FindRoute extends Component {
  constructor() {
    super();
    this.state = {
      start: "",
      end: "",
      method: null,
    };

    this.handleDepartureStation = (departure) => {
      if (
        isMoreThanTwoWords(departure) &&
        existStationName(departure) &&
        haveSpaceInName(departure)
      ) {
        this.setState({ ...this.state, start: departure });
        console.log(this.state);
      } else {
        alert(ERROR.MESSAGE);
      }
    };

    this.handleArrivalStation = (arrival) => {
      if (
        isMoreThanTwoWords(arrival) &&
        existStationName(arrival) &&
        haveSpaceInName(arrival) &&
        isDiffrentStationName(this.state.start, arrival)
      ) {
        this.setState({ ...this.state, end: arrival });
        console.log(this.state);
      } else {
        alert(ERROR.MESSAGE);
      }
    };
  }

  mount() {
    const departureStationInput = document.querySelector(
      "#departure-station-name-input"
    );
    departureStationInput.addEventListener("blur", (event) => {
      console.log(event.target.value);
      this.handleDepartureStation(event.target.value);
    });
    const arrivalStationInput = document.querySelector(
      "#arrival-station-name-input"
    );
    arrivalStationInput.addEventListener("blur", (event) => {
      this.handleArrivalStation(event.target.value);
    });
  }

  render() {
    const { start, end } = this.state;
    return `
          <h2>🚇 지하철 길찾기</h2>
          <div>
              <span>출발역</span>
              <input type="text" id="departure-station-name-input" value=${start}>
          </div>
          <div>
              <span>도착역</span>
              <input type="text" id="arrival-station-name-input" value=${end}>
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

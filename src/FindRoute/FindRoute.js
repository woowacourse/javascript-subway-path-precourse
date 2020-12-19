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

const dijkstraDistance = new Dijkstra();
const dijkstraTime = new Dijkstra();

stationData.forEach((station) => {
  dijkstraDistance.addEdge(station.V1, station.V2, station.distance);
  dijkstraTime.addEdge(station.V1, station.V2, station.time);
});

export default class FindRoute extends Component {
  constructor() {
    super();
    this.state = {
      start: "",
      end: "",
      method: "minimumDistance",
      route: [],
      short: [],
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

    this.handleDistanceInput = (distance) => {
      this.setState({ ...this.state, method: distance });
      console.log(this.state);
    };

    this.handleTimeInput = (time) => {
      this.setState({ ...this.state, method: time });
      console.log(this.state);
    };

    this.findRouteButtonClick = () => {
      if (this.state.method === "minimumDistance") {
        const routeResult = dijkstraDistance.findShortestPath(
          this.state.start,
          this.state.end
        );
        const path = calculateShort(routeResult);
        console.log(path);
        this.setState({ ...this.state, route: [...routeResult], short: path });
      } else {
        const routeResult = dijkstraTime.findShortestPath(
          this.state.start,
          this.state.end
        );
        const path = calculateShort(routeResult);
        console.log(path);
        this.setState({ ...this.state, route: [...routeResult], short: path });
      }
    };
  }

  mount() {
    this.mountDepartureStationInput();
    this.mountArrivalStationInput();
    this.mountMinimumDistanceInput();
    this.mountMinimumTimeInput();
    this.mountFindRouteButton();
  }

  mountDepartureStationInput() {
    const departureStationInput = document.querySelector(
      "#departure-station-name-input"
    );
    departureStationInput?.addEventListener("blur", (event) => {
      console.log(event.target.value);
      this.handleDepartureStation(event.target.value);
    });
  }

  mountArrivalStationInput() {
    const arrivalStationInput = document.querySelector(
      "#arrival-station-name-input"
    );
    arrivalStationInput?.addEventListener("blur", (event) => {
      this.handleArrivalStation(event.target.value);
    });
  }

  mountMinimumDistanceInput() {
    const minimumDistanceInput = document.querySelector("#min-distance");
    minimumDistanceInput?.addEventListener("change", (event) => {
      console.log(event.target.value);
      this.handleDistanceInput(event.target.value);
    });
  }

  mountMinimumTimeInput() {
    const minimumTimeInput = document.querySelector("#min-time");
    minimumTimeInput?.addEventListener("change", (event) => {
      this.handleTimeInput(event.target.value);
    });
  }

  mountFindRouteButton() {
    const findRouteButton = document.querySelector("#search-button");
    findRouteButton?.addEventListener("click", this.findRouteButtonClick);
  }

  render() {
    const { start, end, method, route, short } = this.state;
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
            <input type="radio" name="search-type" id="min-distance" value="minimumDistance"
            ${method === "minimumDistance" ? "checked" : ""}>
            <label for="min-distance">최단거리</label>
            <input type="radio" name="search-type" id="min-time" value="minimumTime"
            ${method === "minimumTime" ? "checked" : ""}>
            <label for="min-time">최소시간</label>
          </div>
          <button id="search-button">길 찾기</button>
          ${
            route.length === 0
              ? ""
              : `<div>
          <h3>📝 결과</h3>
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
                <td>${short[1]}km</td>
                <td>${short[0]}분</td>
              </tr>
              <tr>
                <td colspan="2">${route.join("→")}</td>
              </tr>
            </tbody>
          </table>
        </div>`
          }
          `;
  }
}

function calculateShort(result) {
  let time = 0;
  let distance = 0;
  for (let i = 0; i < result.length - 1; i++) {
    const v1 = result[i];
    const v2 = result[i + 1];

    stationData.forEach((station) => {
      if (station.V1 === v1 && station.V2 === v2) {
        time += station.time;
        distance += station.distance;
      }
    });
  }
  return [time, distance];
}

import { Stations, Lines } from "../models/data.js";
import FormView from "../views/FormView.js";

export default class MainController {
  constructor() {
    this.tag = "[MainController]";
    this.FormView = new FormView();
  }
  init() {
    this.FormView.setup(document.querySelector("#app")).on("@submit", (e) =>
      this.onSubmit(e.detail.stations)
    );
  }

  onSubmit(e) {
    console.log(this.tag, "onSubmit", e);

    const [departureStation, arrivalStation] = e;
    // console.log(departureStation, arrivalStation);
    // console.log(Stations);
    if (!this.isValidStationName(departureStation, arrivalStation)) {
      //   console.log("올바르지 못한 값");
      return;
    }
  }

  isValidStationName(departureStation, arrivalStation) {
    if (
      this.isDepartureStationName(departureStation) &&
      this.isArrivalStationName(arrivalStation) &&
      this.isSameStation(departureStation, arrivalStation)
    ) {
      return true;
    }

    return false;
  }

  isDepartureStationName(station) {
    const locationText = "출발역";
    if (this.isValid(station, locationText)) {
      return true;
    }

    return false;
  }
  isArrivalStationName(station) {
    const locationText = "도착역";
    if (this.isValid(station, locationText)) {
      return true;
    }

    return false;
  }

  isValid(station, locationText) {
    if (
      this.is2Digit(station, locationText) &&
      this.isHasStation(station, locationText)
    ) {
      return true;
    }

    return false;
  }

  is2Digit(station, locationText) {
    console.log(this.tag, "is2Digit()", station);
    if (station.length >= 2) {
      return true;
    }
    window.alert(`${locationText}은 두 글자 이상 입력 하셔야 합니다. `);
    return false;
  }

  isHasStation(station, locationText) {
    console.log(this.tag, "isHasStation()", station);
    if (Stations.indexOf(station) !== -1) {
      return true;
    }
    window.alert(
      `${locationText} 입력값 ${station}역은 등록된 역 이름이 아닙니다.`
    );
    return false;
  }

  isSameStation(start, end) {
    console.log(this.tag, "isSameStation()", start, end);
    if (start !== end) {
      return true;
    }
    window.alert(`출발역과 도착역은 서로 달라야 합니다`);
    return false;
  }

  isConnection(start, end) {}
}

import { Stations, Lines } from "../models/data.js";
import { DOM, INITIAL_RADIO_OPTION } from "../utils/constants.js";
import Dijkstra from "../utils/Dijkstra.js";
import FormView from "../views/FormView.js";
import DepartureStationView from "../views/DepartureStationView.js";
import ArrivalStationView from "../views/ArrivalStationView.js";
import shortestRadioView from "../views/shortestRadioView.js";
import minimumRadioView from "../views/minimumRadioView.js";

export default class MainController {
  constructor() {
    this.tag = "[MainController]";
    this.FormView = new FormView();
    this.DepartureStationView = new DepartureStationView();
    this.ArrivalStationView = new ArrivalStationView();
    this.Dijkstra = new Dijkstra();
    this.shortestRadioView = new shortestRadioView();
    this.minimumRadioView = new minimumRadioView();

    this.radioOption = INITIAL_RADIO_OPTION;
  }

  init() {
    this.FormView.setup(document.querySelector("#app")).on("@submit", (e) =>
      this.onSubmit(e.detail.stations)
    );

    this.DepartureStationView.setup(
      document.querySelector("#" + DOM.DEPARTURE_STATION_NAME_INPUT_ID)
    );
    this.ArrivalStationView.setup(
      document.querySelector("#" + DOM.ARRIVAL_STAION_NAME_INPUT_ID)
    );

    this.shortestRadioView.setup(
      document.querySelector("#" + DOM.SHORTEST_DISTANCE_RADIO_ID)
    );
    this.minimumRadioView.setup(
      document.querySelector("#" + DOM.MINIMUM_DISTANCE_RADIO_ID)
    );
    this.selectedOptionRadio();
  }

  onSubmit(e) {
    console.log(this.tag, "onSubmit", e);

    const [departureStation, arrivalStation] = e;

    if (!this.isValidStationName(departureStation, arrivalStation)) {
      this.DepartureStationView.reset();
      this.ArrivalStationView.reset();
      return;
    }

    this.selectedOptionRadio();
  }

  selectedOptionRadio() {
    console.log(this.tag, "selectedOptionRadio", this.radioOption);
    if (this.shortestRadioView.radioInfo()) {
      this.radioOption = "shortest";
      console.log("option----", this.radioOption);
      return;
    }

    if (this.minimumRadioView.radioInfo()) {
      this.radioOption = "minimum";
      console.log("option----", this.radioOption);
      return;
    }

    return new Error("잘못된 radio value 값");
    // console.log("option----", this.radioOption);
  }

  isValidStationName(departureStation, arrivalStation) {
    if (
      this.isDepartureStationName(departureStation) &&
      this.isArrivalStationName(arrivalStation) &&
      this.isSameStation(departureStation, arrivalStation) &&
      this.isConnection(departureStation, arrivalStation)
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

  isConnection(start, end) {
    console.log(this.tag, "isConnection()", start, end);
    for (const line of Lines) {
      if (line.stations.includes(start) && line.stations.includes(end)) {
        return true;
      }
    }
    window.alert(
      `출발역 ${start}역은 도착역 ${end}역과 연결되어 있지 않습니다.`
    );
    return false;
  }
}

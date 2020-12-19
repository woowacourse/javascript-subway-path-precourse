import View from "./View.js";
import { DOM } from "../utils/constants.js";

export default class FormView extends View {
  constructor() {
    super();
    this.tag = "[FormView]";
  }

  setup(el) {
    this.init(el);
    this.el.innerHTML = this.render();
    this.bindEvents();
    return this;
  }

  render() {
    return `
      <h2>🚇 지하철 길찾기</h2>
      <form>
        <div>
          <label for=${DOM.DEPARTURE_STATION_NAME_INPUT_ID}>출발역</label>
          <input
            type="text"
            id=${DOM.DEPARTURE_STATION_NAME_INPUT_ID}
            autocomplete="off"
          />
        </div>
  
        <div>
          <label for=${DOM.ARRIVAL_STAION_NAME_INPUT_ID}>도착역</label>
          <input type="text" id=${DOM.ARRIVAL_STAION_NAME_INPUT_ID} autocomplete="off" />
        </div>
  
        <div>
          <input
            type="radio"
            id=${DOM.SHORTEST_DISTANCE_RADIO_ID}
            name="search-type"
            value="distance"
            checked="checked"
          />
          <label for=${DOM.SHORTEST_DISTANCE_RADIO_ID}>최단거리</label>
  
          <input
            type="radio"
            id=${DOM.MINIMUM_DISTANCE_RADIO_ID}
            name="search-type"
            value="time"
          />
          <label for=${DOM.MINIMUM_DISTANCE_RADIO_ID}>최소거리</label>
        </div>
  
        <button id=${DOM.SEARCH_BUTTON_ID}>길 찾기</button>
      </form>
      `;
  }

  bindEvents() {
    this.on("submit", (e) => this.onSubmit(e));
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(e.target[0].value); //DepartureStationView
    // console.log(e.target[1].value); //ArrivalStationView
    // console.log(e.target[2].checked);
    // console.log(e.target[2].value);
    // console.log(e.target[3]);
    // console.log(e.target[4]);

    this.emit("@submit", { stations: [e.target[0].value, e.target[1].value] });
  }
}

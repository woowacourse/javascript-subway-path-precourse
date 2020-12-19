import View from "./View.js";

export default class FormView extends View {
  constructor() {
    super();
    this.tag = "[FormView]";
  }

  setup(el) {
    this.init(el);
    this.el.innerHTML = this.render();
    return this;
  }

  render() {
    return `
      <h2>🚇 지하철 길찾기</h2>
      <form>
        <div>
          <label for="departure-station-name-input">출발역</label>
          <input
            type="text"
            id="departure-station-name-input"
            autocomplete="off"
          />
        </div>
  
        <div>
          <label for="arrival-station-name-input">도착역</label>
          <input type="text" id="arrival-station-name-input" autocomplete="off" />
        </div>
  
        <div>
          <input
            type="radio"
            id="shortest-distance"
            name="search-type"
            value="shortest"
            checked
          />
          <label for="shortest-distance">최단거리</label>
  
          <input
            type="radio"
            id="minimum-distance"
            name="search-type"
            value="minimum"
          />
          <label for="minimum-distance">최소거리</label>
        </div>
  
        <button id="search-button">길 찾기</button>
      </form>
      `;
  }
}

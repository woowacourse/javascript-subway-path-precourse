//출발
import View from "./View.js";

export default class DepartureStationView extends View {
  constructor() {
    super();
    this.tag = "[DepartureStationView]";
  }

  setup(el) {
    this.init(el);
    return this;
  }
}

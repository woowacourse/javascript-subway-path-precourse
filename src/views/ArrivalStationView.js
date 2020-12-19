//도착
import View from "./View.js";

export default class ArrivalStationView extends View {
  constructor() {
    super();
    this.tag = "[ArrivalStationView]";
  }

  setup(el) {
    this.init(el);
    return this;
  }

  reset() {
    this.el.value = "";
  }
}

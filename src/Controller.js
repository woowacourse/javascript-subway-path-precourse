import {
  CANT_INPUT_NOT_EXIST_STATION,
  CANT_SAME_START_AND_END,
  MUST_MORE_THAN_2,
} from "./constants/message.js";
import { stations } from "./data.js";

export default class Controller {
  constructor(Model, View) {
    this.Model = Model;
    this.View = View;
    this.initialize();
  }

  initialize() {
    this.View.clickSearch = this.clickSearch.bind(this);
  }

  clickSearch(start, end) {
    if (start.length < 2 || end.length < 2) {
      alert(MUST_MORE_THAN_2);
      return;
    }
    if (!this.existStation(start) || !this.existStation(end)) {
      alert(CANT_INPUT_NOT_EXIST_STATION);
      return;
    }
    if (start === end) {
      alert(CANT_SAME_START_AND_END);
      return;
    }
    // 주어진 노선에서 연결되지 않은 역은 없다
  }

  existStation(name) {
    return stations.indexOf(name) > -1;
  }
}

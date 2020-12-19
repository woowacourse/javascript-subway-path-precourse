import {STATION, LINE, SECTION} from '../constant/constant.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class Subway {
  constructor() {
    this.station = STATION;
    this.line = LINE;
    this.section = SECTION;
  }

  findShortDistance() {
    const dijkstra = new Dijkstra();
  }
}

import {STATION, LINE, SECTION} from '../constant/constant.js';
import {splitSection} from '../utils/split.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class Subway {
  constructor() {
    this.station = STATION;
    this.line = LINE;
    this.section = SECTION;
    this.splitedSection = splitSection(SECTION);
  }

  findShortDistance(departure, arrival) {
    const dijkstra = new Dijkstra();
    this.splitedSection.forEach((station) => {
      const {names, distance} = station;
      for (let i = 0; i < distance.length; i++) {
        dijkstra.addEdge(names[i], names[i + 1], distance[i]);
      }
    });
    const result = dijkstra.findShortestPath(departure, arrival);
    findTotalTimeAndDistance(result);

    return result;
  }
}

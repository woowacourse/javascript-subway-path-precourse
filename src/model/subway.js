import {STATION, SECTION} from '../constant/constant.js';
import {splitSection} from '../utils/split.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class Subway {
  constructor() {
    this.station = STATION;
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

    return result;
  }

  findShortTime(departure, arrival) {
    const dijkstra = new Dijkstra();
    this.splitedSection.forEach((station) => {
      const {names, time} = station;
      for (let i = 0; i < time.length; i++) {
        dijkstra.addEdge(names[i], names[i + 1], time[i]);
      }
    });
    const result = dijkstra.findShortestPath(departure, arrival);

    return result;
  }
}

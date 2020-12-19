import {STATION, SECTION} from '../constant/constant.js';
import {splitSection} from '../utils/split.js';
import {findTotalTimeOrDistance} from '../utils/total.js';
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
      for (let i = 0; i < station.length; i++) {
        const departure = station[i].section[0];
        const arrival = station[i].section[1];
        dijkstra.addEdge(departure, arrival, station[i].distance);
      }
    });
    const result = dijkstra.findShortestPath(departure, arrival);
    const total = findTotalTimeOrDistance(result, this.splitedSection);

    return {result, total};
  }

  findShortTime(departure, arrival) {
    const dijkstra = new Dijkstra();
    this.splitedSection.forEach((station) => {
      for (let i = 0; i < station.length; i++) {
        const departure = station[i].section[0];
        const arrival = station[i].section[1];
        dijkstra.addEdge(departure, arrival, station[i].time);
      }
    });
    const result = dijkstra.findShortestPath(departure, arrival);
    const total = findTotalTimeOrDistance(result, this.splitedSection);

    return {result, total};
  }
}

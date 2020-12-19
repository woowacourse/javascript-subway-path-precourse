import Dijkstra from "./utils/Dijkstra.js";
import { stations, lines } from "./data/defaulData.js"

export default class StationPathModel {
  constructor() {
    this.option = 'shortest-distance';
  }

  findSections(name) {
    const sections = lines.forEach((line) => {
      if (line === name) {
        return lines[line].sections;
      };
    })
    return sections;
  }

  getShortestDistance(departure, arrival) {
    const distance = 0;
    const dijkstra = new Dijkstra();
    const line = '2호선';
    const sections = this.findSections(line);
    sections.forEach((stationInfo) => {
      dijkstra.addEdge()
    });

    return distance;
  }
}
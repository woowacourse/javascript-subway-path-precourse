import Dijkstra from "./utils/Dijkstra.js";
import { stations, lines } from "./data/defaulData.js"

export default class StationPathModel {
  constructor() {
    this.option = 'shortest-distance';
  }

  findSections(name) {
    let sections = []
    lines.forEach((line) => {
      if (line.name === name) {
        sections = line.sections;
        return;
      }
    })
    return sections;
  }

  getShortestDistancePath(departure, arrival) {
    const dijkstra = new Dijkstra();
    const line = '2호선';
    const sections = this.findSections(line);
    sections.forEach((section) => {
      console.log(section.start);
      console.log(section.end);
      console.log(section.distance);
      dijkstra.addEdge(section.start, section.end, Number(section.distance));
    });
    const result = dijkstra.findShortestPath(departure, arrival)
    return result;
  }
}
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

  getLineGraph(line) {
    const dijkstra = new Dijkstra();
    const sections = this.findSections(line);
    sections.forEach((section) => {
      dijkstra.addEdge(section.start, section.end, Number(section.distance));
    });

    return dijkstra;
  }

  getShortestDistancePath(departure, arrival) {
    const dijkstra = this.getLineGraph(line);
    const result = dijkstra.findShortestPath(departure, arrival)
    return result;
  }
}
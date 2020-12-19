import Dijkstra from "./utils/Dijkstra.js";
import { stations, lines } from "./data/defaulData.js"

export default class StationPathModel {
  constructor() {
    this.option = 'shortest-distance';
  }

  findLines(departure, arrival) {
    let lineNames = [];
    lines.forEach((line) => {
      const lineStations = []
      line.sections.forEach((section) => {
        lineStations.push(section.start, section.end)
      })
      if (lineStations.includes(departure) && lineStations.includes(arrival)) {
        lineNames.push(line.name);
      }
    })
    return lineNames;
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
    const line = this.findLines(departure, arrival);
    console.log(line);
    const dijkstra = this.getLineGraph(line);
    const result = dijkstra.findShortestPath(departure, arrival)
    return result;
  }
}
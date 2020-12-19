import Dijkstra from "./utils/Dijkstra.js";
import { lines } from "./data/defaulData.js"

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
      if (lineStations.includes(departure) || lineStations.includes(arrival)) {
        lineNames.push(line.name);
      }
    })
    return lineNames;
  }
  
  findSections(name) {
    let sections = []
    lines.forEach((line) => {
      if (name.includes(line.name)) {
        sections = sections.concat(line.sections);
        return;
      }
    })
    return sections;
  }

  getLineGraph(line, option) {
    const dijkstra = new Dijkstra();
    line.forEach ((eachline) => {
      const sections = this.findSections(eachline)
      sections.forEach((section) => {
          if (option === 'distance') {
            dijkstra.addEdge(section.start, section.end, section.distance);
          }
          if (option === 'time') {
            dijkstra.addEdge(section.start, section.end, section.time);
          }
      });
    })

    return dijkstra;
  }

  getShortestDistancePath(departure, arrival) {
    const lineNames = this.findLines(departure, arrival);
    const dijkstra = this.getLineGraph(lineNames, 'distance');
    return dijkstra.findShortestPath(departure, arrival);
  }

  getShortestTimePath(departure, arrival) {
    const lineNames = this.findLines(departure, arrival);
    const dijkstra = this.getLineGraph(lineNames, 'time');
    return dijkstra.findShortestPath(departure, arrival)
  }

  getShortestPath(option, departure, arrival) {
    if (option === 'shortest-path') {
      return this.getShortestDistancePath(departure, arrival);
    }
    if (option === 'shortest-time') {
      return this.getShortestTimePath(departure, arrival);
    }
  }

  calculateTime(section, path) {
    let time = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const start = path[i];
      const end = path[i + 1]
      if ((section.start === start && section.end === end)
          || (section.start === end && section.end === start)) {
            time += section.time;
      }
    }
    return time;
  }

  calculateDistance(section, path) {
    let distance = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const start = path[i];
      const end = path[i + 1]
      if ((section.start === start && section.end === end)
          || (section.start === end && section.end === start)) {
            distance += section.distance;
      }
    }
    return distance; 
  }

  getTime(line, path) {
    const sections = this.findSections(line);
    let time = 0;
    sections.forEach((section) => {
        time += this.calculateTime(section, path);
    })
    return time;
  }

  getDistance(line, path) {
    const sections = this.findSections(line);
    let distance = 0;
    sections.forEach((section) => {
       distance += this.calculateDistance(section, path);
    })
    return distance;
  } 
}
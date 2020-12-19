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
        sections.push(line.sections);
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
        section.forEach((eachSection) => {
          if (option === 'distance') {
            dijkstra.addEdge(eachSection.start, eachSection.end, eachSection.distance);
          }
          if (option === 'time') {
            dijkstra.addEdge(eachSection.start, eachSection.end, eachSection.time);
          }
        })
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

  getTime(line, path) {
    const sections = this.findSections(line);
    let time = 0;
    sections.forEach((section) => {
      section.forEach((eachSection) => {
        for (let i = 0; i < path.length - 1; i++) {
          const start = path[i];
          const end = path[i + 1]
          if ((eachSection.start === start && eachSection.end === end)
              || (eachSection.start === end && eachSection.end === start)) {
                time += eachSection.time;
                return;
          }
        }
      })
    })

    return time;
  }

  getDistance(line, path) {
    const sections = this.findSections(line);
    let distance = 0;
    sections.forEach((section) => {
      section.forEach((eachSection) => {
        for (let i = 0; i < path.length - 1; i++) {
          const start = path[i];
          const end = path[i + 1]
          if ((eachSection.start === start && eachSection.end === end)
              || (eachSection.start === end && eachSection.end === start)) {
                distance += eachSection.distance;
                return;
          }
        }
      })
    })
    return distance;
  } 
}
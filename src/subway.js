import Dijkstra from './utils/Dijkstra.js';
import {stations, lines, sections} from './model/subway.model.js';
import {isInputValid, isLinkedStation} from './subway.validator.js';
import {SEARCH_TYPE} from './constants.js';

export default class Subway {
  constructor() {
    this.stations = stations;
    this.lines = lines;
    this.sections = sections;
    this.dijkstra = new Dijkstra();
  }

  search(startStation, endStation, searchType) {
    if (
      !isInputValid(startStation, endStation, this.stations)
    ) return null;

    this.setEdge(this.lines, this.sections, searchType);

    const result = this.dijkstra.findShortestPath(startStation, endStation);

    if (!isLinkedStation(result)) return null;
  }

  setEdge(lines, sections, searchType) {
    Object.keys(lines).forEach((lineName) => {
      this.addEdge(lines[lineName], sections[lineName], searchType);
    });
  }

  addEdge(line, section, searchType) {
    for (let i = 0; i < line.length - 1; ++i) {
      const startStation = line[i].name;
      const endStation = line[i+1].name;
      let weight;

      if (searchType === SEARCH_TYPE.MIN_DISTANCE) {
        weight = section[startStation][endStation].distance;
      } else {
        weight = section[startStation][endStation].time;
      }

      this.dijkstra.addEdge(startStation, endStation, weight);
    }
  }
}

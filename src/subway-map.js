import { stations, lines } from "./subway-map-data.js";

export default class SubwayMap {
  constructor() {
    this.stationsGraph = new Map();
    this.fillStationsGraph(stations);
    this.constructStationsGraph(lines);
  }

  fillStationsGraph(stationsArray) {
    stationsArray.forEach((_station) => this.stationsGraph.set(_station, {}));
  }

  constructStationsGraph(linesArray) {
    linesArray.forEach((_line) => {
      for (let i = 0; i < _line.section.length - 1; i++) {
        this.addBothwayRouteIntoStationsGraph(
          _line.section[i],
          _line.section[i + 1],
          _line.sectionDistance[i],
          _line.sectionTravelTime[i]
        );
      }
    });
  }

  addBothwayRouteIntoStationsGraph(begin, end, distance, travelTime) {
    this.addRouteIntoStationsGraph(begin, end, distance, travelTime);
    this.addRouteIntoStationsGraph(end, begin, distance, travelTime);
  }

  addRouteIntoStationsGraph(begin, end, distance, travelTime) {
    this.stationsGraph.set(begin, {
      ...this.stationsGraph.get(begin),
      [end]: [distance, travelTime],
    });
  }
}

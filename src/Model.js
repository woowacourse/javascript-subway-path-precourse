import Dijkstra from "./utils/Dijkstra.js";
import { stations, sections } from "./data.js";

export default class Model {
  stations = stations;
  sections = sections;
  distanceDijkstra = new Dijkstra();
  timeDijkstra = new Dijkstra();

  constructor() {
    this.initialize();
  }

  initialize() {
    for (const section in this.sections) {
      const [start, end] = section.split("-");
      this.distanceDijkstra.addEdge(
        start,
        end,
        this.sections[section].distance
      );
      this.timeDijkstra.addEdge(start, end, this.sections[section].time);
    }
  }

  getTotalTimeAndDistance(shortestPath) {
    let i,
      totalTime = 0,
      totalDistance = 0;
    for (i = 0; i < shortestPath.length - 1; i++) {
      const { distance, time } = this.sections.hasOwnProperty(
        `${shortestPath[i]}-${shortestPath[i + 1]}`
      )
        ? this.sections[`${shortestPath[i]}-${shortestPath[i + 1]}`]
        : this.sections[`${shortestPath[i + 1]}-${shortestPath[i]}`];
      totalDistance += distance;
      totalTime += time;
    }

    return [totalDistance, totalTime];
  }
}

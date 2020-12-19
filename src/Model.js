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

  getTotalTimeAndDistance(sections) {
    let totalDistance = 0;
    let totalTime = 0;
    let i;
    for (i = 0; i < sections.length - 1; i++) {
      const { distance, time } = this.sections[
        `${sections[i]}-${sections[i + 1]}`
      ];
      totalDistance += distance;
      totalTime += time;
    }
    return [totalDistance, totalTime];
  }
}

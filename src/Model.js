import { stations, sections, distanceDijkstra, timeDijkstra } from "./data.js";
import { DISTANCE } from "./constants/text.js";

export default class Model {
  stations = stations;
  sections = sections;
  distanceDijkstra = distanceDijkstra;
  timeDijkstra = timeDijkstra;

  findShortest(start, end, type) {
    return type === DISTANCE
      ? distanceDijkstra.findShortestPath(start, end)
      : timeDijkstra.findShortestPath(start, end);
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

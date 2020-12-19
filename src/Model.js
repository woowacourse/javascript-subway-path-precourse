import { stations, sections, distanceDijkstra, timeDijkstra } from "./data.js";

export default class Model {
  stations = stations;
  sections = sections;
  distanceDijkstra = distanceDijkstra;
  timeDijkstra = timeDijkstra;

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

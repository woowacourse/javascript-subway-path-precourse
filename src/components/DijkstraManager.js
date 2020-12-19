import Dijkstra from "../utils/Dijkstra.js";

class DijkstraManager {
  constructor(getLines) {
    this.getLines = getLines;

    this.render();
  }

  setManager = (manager, stations, type) => {
    for (let i = 0; i < stations.length - 1; i++) {
      let totalType = type[i];
      manager.addEdge(stations[i], stations[i + 1], totalType);
      totalType += type[i + 1] || 0;
    }
  };

  getDistanceResult = (departureStation, arrivalStation) => {
    return this.distanceManager.findShortestPath(
      departureStation,
      arrivalStation
    );
  };

  getMinuteResult = (departureStation, arrivalStation) => {
    return this.minuteManager.findShortestPath(
      departureStation,
      arrivalStation
    );
  };

  render = () => {
    this.distanceManager = new Dijkstra();
    this.minuteManager = new Dijkstra();
    this.lines = this.getLines();

    this.lines.forEach(line => {
      this.setManager(this.distanceManager, line.station, line.kilometer);
      this.setManager(this.minuteManager, line.station, line.minute);
    });
  };
}

export default DijkstraManager;

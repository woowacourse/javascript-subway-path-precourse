import StationModel from '../models/StationModel.js';
import LineModel from '../models/LineModel.js';
import Dijkstra from '../utils/Dijkstra.js';
import { lines, stations, paths } from '../data.js';

export default class AppController {
  constructor() {
    this.stationModel = new StationModel(stations);
    this.lineModel = new LineModel(lines);
    this.graphs = {
      shortestDistance: new Dijkstra(),
      minimalTime: new Dijkstra(),
    };

    this.initializePath(paths);
  }

  initializePath(initialPaths) {
    initialPaths.forEach((path) => {
      const { from, to, distance, time } = path;

      this.graphs.shortestDistance.addEdge(from, to, distance);
      this.graphs.minimalTime.addEdge(from, to, time);
    });
  }
}

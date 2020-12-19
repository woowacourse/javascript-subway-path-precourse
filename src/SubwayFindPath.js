import { lines } from './data/data.js';
import { FindPathInputs } from './components/FindPathInputs.js';
import Dijkstra from './utils/Dijkstra.js';
import { VALUE } from './constants/constants.js';
import { FindPathResult } from './components/FindPathResult.js';

export class SubwayFindPath {
  constructor() {
    this.props = {
      findPath: this.findPath,
    };
    this.initializeData();
    this.initializeComponents();
  }

  initializeComponents = () => {
    this.findPathInputs = new FindPathInputs(this.props);
    this.findPathResult = new FindPathResult();
  };

  initializeData = () => {
    this.dijkstra = new Dijkstra();
  };

  renderResult = (departure, arrival, weight, dijkstra) => {
    this.findPathResult.render({
      ...this.props,
      departure: departure,
      arrival: arrival,
      weight: weight,
      dijkstra: dijkstra,
    });
  };

  findPath = (departure, arrival, weight) => {
    this.addEdge(weight);
    this.renderResult(departure, arrival, weight, this.dijkstra);
  };

  addEdge = (weight) => {
    lines.forEach((line) => {
      this.addEdgeByWeight(line, weight);
    });
  };

  addEdgeByWeight = (line, weight) => {
    line.sections.forEach((section) => {
      if (weight === VALUE.DISTANCE_VALUE) {
        this.dijkstra.addEdge(section.start, section.end, section.distance);
      } else if (weight === VALUE.TIME_VALUE) {
        this.dijkstra.addEdge(section.start, section.end, section.time);
      }
    });
  };
}

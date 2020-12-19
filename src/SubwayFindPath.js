import { stations, lines } from './data/data.js';
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
    this.dijkstraByTime = new Dijkstra();
    this.dijkstraByDistance = new Dijkstra();
  }

  initializeComponents = () => {
    this.findPathInputs = new FindPathInputs(this.props);
    this.findPathResult = new FindPathResult();
  };

  initializeData = () => {};

  renderResult = (weight, dijkstra) => {
    this.findPathResult.render({
      ...this.props,
      weight: weight,
      dijkstra: dijkstra,
    });
  };

  onUpdate = () => {};

  findPath = (weight) => {
    if (weight === VALUE.TIME_VALUE) {
      this.addEdgesByTimeWeight();
      this.renderResult(weight, this.dijkstraByTime);
    } else if (weight === VALUE.DISTANCE_VALUE) {
      this.addEdgesByDistanceWeight();
      this.renderResult(weight, this.dijkstraByDistance);
    }
  };

  addEdgesByTimeWeight = () => {
    lines.forEach((line) => {
      line.sections.forEach((section) => {
        this.dijkstraByTime.addEdge(section.start, section.end, section.time);
      });
    });
  };

  addEdgesByDistanceWeight = () => {
    lines.forEach((line) => {
      line.sections.forEach((section) => {
        this.dijkstraByDistance.addEdge(
          section.start,
          section.end,
          section.distance,
        );
      });
    });
  };
}

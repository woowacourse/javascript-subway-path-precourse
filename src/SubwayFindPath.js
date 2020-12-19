import { stations, lines } from './data/data.js';
import { FindPathInputs } from './components/FindPathInputs.js';
import Dijkstra from './utils/Dijkstra.js';

export class SubwayFindPath {
  constructor() {
    this.initializeData();
    this.initializeComponents();
    this.dijkstraByTime = new Dijkstra();
    this.dijkstraByDistance = new Dijkstra();
  }

  initializeComponents = () => {
    this.findPathInputs = new FindPathInputs();
  };

  initializeData = () => {
    this.state = {
      stations: stations,
      lines: lines,
    };
  };

  render = () => {
    this.findPathInputs.render();
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
        this.dijkstraByDistance.addEdge(section.start, section.end, section.distance);
      });
    });
  };
}

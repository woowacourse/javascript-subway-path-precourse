import { stations, lines } from './data/data.js';
import { FindPathInputs } from './components/FindPathInputs.js';
export class SubwayFindPath {
  constructor() {
    this.initializeData();
  }

  initializeComponents = () => {
    this.findPathInputs = FindPathInputs();
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
}

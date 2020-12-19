import { stations, lines } from './data/data.js';
import { FindPathInputs } from './components/FindPathInputs.js';
export class SubwayFindPath {
  constructor() {
    this.initializeData();
    this.initializeComponents();
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
}

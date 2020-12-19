import { lines } from "./data/line.js";
import { stations } from "./data/station.js";

export default class App {
  constructor() {
    this.lines = lines;
    this.stations = stations;
  }
}

const app = new App();

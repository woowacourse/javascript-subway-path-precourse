import { stations, lines } from "../@shared/data.js";

class SubwayManager {
  constructor() {
    this.stations = stations;
    this.lines = lines;
  }
}

export default SubwayManager;

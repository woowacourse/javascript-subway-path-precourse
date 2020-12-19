import { distanceDijkstra } from '../index.js';
import { distances, sections } from '../database/data.js';

export default class Distance {
  constructor(name) {
    this.lineName = name;
    this.section = sections[this.lineName];
    this.instance = distanceDijkstra;
    this.pushDistance();
  }

  pushDistance() {
    const distanceOfLine = distances[this.lineName];
    let idx = 0;
    distanceOfLine.forEach(distance => {
      let [start, end] = this.getStartEnd(idx);
      this.instance.addEdge(start, end, distance);
      idx++;
    });
  }

  getStartEnd(idx) {
    return [this.section[idx], this.section[idx + 1]];
  }
}

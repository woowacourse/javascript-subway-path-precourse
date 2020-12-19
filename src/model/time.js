import { timeDijkstra } from './dijkstra.js';
import { times, sections } from '../database/data.js';

export default class Time {
  constructor(name) {
    this.lineName = name;
    this.section = sections[this.lineName];
    this.instance = timeDijkstra;
    this.pushTime();
  }

  pushTime() {
    const timeOfLine = times[this.lineName];
    let idx = 0;
    timeOfLine.forEach(time => {
      let [start, end] = this.getStartEnd(idx);
      this.instance.addEdge(start, end, time);
      idx++;
    });
  }

  getStartEnd(idx) {
    return [this.section[idx], this.section[idx + 1]];
  }
}

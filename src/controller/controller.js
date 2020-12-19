import { times, distances, lines, sections } from '../database/data.js';
import { default as view } from '../view/view.js';
import { timeDijkstra, distanceDijkstra } from '../index.js';

export default {
  init(tree, start, end) {
    this.tree = tree;
    this.shortestPath = tree.findShortestPath(start, end);
    const time = this.getTime(this.shortestPath);
    const distance = this.getDistance(this.shortestPath);
    let flag = '';
    if (this.tree === timeDijkstra) {
      flag = 'time';
    } else {
      flag = 'distance';
    }
    view.drawTable(distance, time, this.shortestPath, flag);
  },

  getTime(route) {
    let idx = 0;
    let time = 0;
    route.forEach(station => {
      let [start, end] = this.getStartEnd(idx, route);
      let key = this.checkStartEndBothInLine(start, end);
      if (key) {
        time += times[key][idx];
      }
      idx++;
    });
    return time;
  },

  getDistance(route) {
    let idx = 0;
    let distance = 0;
    route.forEach(station => {
      let [start, end] = this.getStartEnd(idx, route);
      let key = this.checkStartEndBothInLine(start, end);
      if (key) {
        distance += distances[key][idx];
      }
      idx++;
    });
    return distance;
  },

  checkStartEndBothInLine(start, end) {
    for (const [key, value] of Object.entries(sections)) {
      //   console.log(value);
      if (value.includes(start) && value.includes(end)) {
        return key;
      }
    }
    return false;
  },

  getStartEnd(idx, route) {
    return [route[idx], route[idx + 1]];
  },
  clear() {
    document.querySelector('#departure-station-name-input').value = '';
    document.querySelector('#arrival-station-name-input').value = '';
  },
};

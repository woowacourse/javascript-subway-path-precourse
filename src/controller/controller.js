import { times, distances, lines, sections } from '../database/data.js';
import { timeDijkstra, distanceDijkstra } from '../index.js';

export default {
  init(tree, start, end) {
    this.tree = tree;
    this.shortestPath = tree.findShortestPath(start, end);
    if (this.tree === timeDijkstra) {
      this.getTime(this.shortestPath);
    } else if (tree === distanceDijkstra) {
      this.getDistance(this.shortestPath);
    }
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
    console.log(time);
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
    console.log(distance);
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
};

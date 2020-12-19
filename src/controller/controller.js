import { times, distances, lines } from '../database/data.js';
import { timeDijkstra, distanceDijkstra } from '../index.js';

export default {
  init(tree, start, end) {
    this.tree = tree;
    this.shortestPath = tree.findShortestPath(start, end);
    if (this.tree === timeDijkstra) {
      this.getTime(this.shortestPath);
    } else if (this.tree === distanceDijkstra) {
      this.getDistance(this.shortestPath);
    }
  },

  getTime(route) {
    console.log('ddd');
  },

  getDistance(route) {
    console.log('sss');
  },
};

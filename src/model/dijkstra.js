import Dijkstra from '../utils/Dijkstra.js';
import { lines } from '../database/data.js';
import Distance from './distance.js';
import Time from './time.js';

export const timeDijkstra = new Dijkstra();
export const distanceDijkstra = new Dijkstra();

lines.forEach(line => {
  new Distance(line);
});

lines.forEach(line => {
  new Time(line);
});

console.log(timeDijkstra.findShortestPath('교대', '양재시민의숲'));

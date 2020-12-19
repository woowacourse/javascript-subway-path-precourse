import { LINES, STATIONS } from '../configuration.js';
import Dijkstra from '../utils/Dijkstra.js';

export const loadSubwayMapDataToLocalStorage = () => {
  localStorage.setItem('lines', JSON.stringify(LINES));
  localStorage.setItem('stations', JSON.stringify(STATIONS));
};

export const makeSubwayMapGraphAll = () => {
  makeSubwayMapGraph(LINES, STATIONS, 'distanceInterval');
  makeSubwayMapGraph(LINES, STATIONS, 'timeInterval');
};

const makeSubwayMapGraph = (lines, stations, key) => {
  const dijkstra = new Dijkstra();

  stations.forEach((station) => dijkstra.addVertex(station));
  lines.forEach((line) => {
    const stations = line.stations;
    const intervals = line[key];

    for (let i = 0; i < stations.length - 1; i++) {
      dijkstra.addEdge(stations[i], stations[i + 1], intervals[i]);
    }
  });
};

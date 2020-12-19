import {
  validateStationNames,
  processException,
} from './validation-manager.js';
import Dijkstra from '../utils/Dijkstra.js';
import { LINES, STATIONS } from '../configuration.js';

export const requestToFindShortestPath = (e) => {
  const departure = document.getElementById('departure-station-name-input');
  const departureName = departure.value;
  const arrival = document.getElementById('arrival-station-name-input');
  const arrivalName = arrival.value;
  const option = document.querySelector('input[name="search-type"]:checked').id;
  const exception = validateStationNames(departureName, arrivalName);
  let shortestPath;

  if (exception) {
    return processException(exception);
  }
  shortestPath = searchShortestPath(departureName, arrivalName, option);
  //displaySearchResult(shortestPath)
};

const searchShortestPath = (departureName, arrivalName, option) => {
  const graph = makeSubwayMapGraph(`${option}Interval`);
  const shortestPath = graph.findShortestPath(departureName, arrivalName);

  console.log(graph);
  console.log(shortestPath);
};

const makeSubwayMapGraph = (option) => {
  const graph = new Dijkstra();

  STATIONS.forEach((station) => graph.addVertex(station));
  LINES.forEach((line) => {
    const stations = line.stations;
    const intervals = line[option];

    for (let i = 0; i < stations.length - 1; i++) {
      graph.addEdge(stations[i], stations[i + 1], intervals[i]);
    }
  });
  return graph;
};

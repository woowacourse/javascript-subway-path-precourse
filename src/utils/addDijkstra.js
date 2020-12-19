import { stationsDistance, stationsTime } from '../models/stationsInitialData.js';

export const addDijkstraEdgeDistance = (dijkstra) => {
  stationsDistance.forEach((station) => {
    dijkstra.addEdge(station.start, station.end, station.distance);
  });
};

export const addDijkstraEdgeTime = (dijkstra) => {
  stationsTime.forEach((station) => {
    dijkstra.addEdge(station.start, station.end, station.time);
  });
};

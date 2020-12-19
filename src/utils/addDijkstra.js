import { stationsDistance, stationsTime } from '../models/stationsInitialData.js';

export const addDijkstraEdgeDistance = (dijkstra) => {
  stationsDistance.forEach((station) => {
    dijkstra.addEdge(station.start, station.end, station.distance);
  });
};

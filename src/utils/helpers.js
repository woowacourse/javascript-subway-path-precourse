import Dijkstra from './Dijkstra.js';

export const makeDijkstra = (type, stations) => {
  const dijkstra = new Dijkstra();
  stations.map(station => dijkstra.addVertex(station.name));

  for (let station of stations) {
    for (let [key, value] of Object.entries(station.sections)) {
      if (type === 'dist') {
        dijkstra.addEdge(station.name, key, value[0]);
      } else if (type === 'time') {
        dijkstra.addEdge(station.name, key, value[1]);
      }
    }
  }

  return dijkstra;
};

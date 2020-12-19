import { stationData, lineData } from '../data.js';
import Station from '../models/Station.js';
import Line from '../models/Line.js';
import Dijkstra from './Dijkstra.js';

export const loadStations = () => {
  const stations = [];
  for (let data of stationData) {
    const station = new Station(data.name);
    for (let [key, value] of Object.entries(data.sections)) {
      station.addSection(key, value[0], value[1]);
    }
    stations.push(station);
  }

  return stations;
};

export const loadLines = stations => {
  const lines = [];
  for (let data of lineData) {
    const line = new Line(data.name);
    for (let station of stations) {
      if (data.stations.includes(station.name)) {
        line.addStation(station);
      }
    }
    lines.push(line);
  }

  return lines;
};

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

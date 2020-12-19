import Dijkstra from './Dijkstra.js';
import { station } from '../data/station.js';
import { section } from '../data/section.js';
import { render } from '../render/render.js';

const getStationDistance = (start, end) => {
  const result = [];
  section.forEach((section) => {
    if (
      (section.station[0] === start && section.station[1] === end) ||
      (section.station[1] === start && section.station[0] === end)
    ) {
      result.push(section.distance);
    }
  });
  return result[0];
};

const getTotalDistance = (route) => {
  let result = 0;
  const stations = [...route];
  while (stations.length > 1) {
    const startStation = stations.shift();
    const endStation = stations[0];
    result += Number(getStationDistance(startStation, endStation));
  }

  return result;
};

const getStationTime = (start, end) => {
  const result = [];
  section.forEach((section) => {
    if (
      (section.station[0] === start && section.station[1] === end) ||
      (section.station[1] === start && section.station[0] === end)
    ) {
      result.push(section.time);
    }
  });
  return result[0];
};

const getTotalTime = (route) => {
  let result = 0;
  const stations = [...route];
  while (stations.length > 1) {
    const startStation = stations.shift();
    const endStation = stations[0];
    result += Number(getStationTime(startStation, endStation));
  }

  return result;
};

const getDistanceResult = (inputStations) => {
  const dijkstra = new Dijkstra();
  station.forEach((name) => dijkstra.addVertex(name));
  section.forEach((section) => {
    dijkstra.addEdge(section.station[0], section.station[1], section.distance);
  });
  section.forEach((section) => {
    dijkstra.addEdge(section.station[1], section.station[0], section.distance);
  });

  return dijkstra.findShortestPath(inputStations[0], inputStations[1]);
};

const getTimeResult = (inputStations) => {
  const dijkstra = new Dijkstra();
  station.forEach((name) => dijkstra.addVertex(name));
  section.forEach((section) => {
    dijkstra.addEdge(section.station[0], section.station[1], section.time);
  });
  section.forEach((section) => {
    dijkstra.addEdge(section.station[1], section.station[0], section.time);
  });
  return dijkstra.findShortestPath(inputStations[0], inputStations[1]);
};

const getSelected = () => {
  const $shortestDistance = document.querySelector('#shortest-distance');

  if ($shortestDistance.hasAttribute('checked')) {
    return 'distance';
  }
  return 'time';
};

export const getReuslt = (inputStations) => {
  const option = getSelected();
  if (option === 'distance') {
    const route = getDistanceResult(inputStations, option);
    render(route, getTotalDistance(route), getTotalTime(route));
  }
  if (option === 'time') {
    const route = getTimeResult(inputStations, option);
    render(route, getTotalDistance(route), getTotalTime(route));
  }
};

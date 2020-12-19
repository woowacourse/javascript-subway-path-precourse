import Dijkstra from '../utils/Dijkstra.js';
import { station } from '../data/station.js';
import { section } from '../data/section.js';
import { render } from './render.js';

const getDistance = () => {
  //
};

const getTime = () => {
  //
};

const getDistanceResult = (inputStations) => {
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

const getTimeResult = (inputStations) => {
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
    render(route, getDistance(route), getTime(route));
  }
  if (option === 'time') {
    const route = getTimeResult(inputStations, option);
    render(route, getDistance(route), getTime(route));
  }
};

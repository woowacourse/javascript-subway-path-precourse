import Dijkstra from './Dijkstra.js';
import { SEARCH_TYPE, ERROR_MSG } from '../constants.js';

export const makeDijkstra = (type, stations) => {
  const dijkstra = new Dijkstra();
  stations.map(station => dijkstra.addVertex(station.name));

  for (let station of stations) {
    for (let [key, value] of Object.entries(station.sections)) {
      if (type === SEARCH_TYPE.DIST) {
        dijkstra.addEdge(station.name, key, value[0]);
      } else if (type === SEARCH_TYPE.TIME) {
        dijkstra.addEdge(station.name, key, value[1]);
      }
    }
  }

  return dijkstra;
};

export const validateInput = (depart, arrive, stations) => {
  if (depart.length < 2 || arrive.length < 2) {
    return alertMessage(ERROR_MSG.NAME_UNDER_TWO);
  } else if (
    !stations.find(station => station.name === depart) ||
    !stations.find(station => station.name === arrive)
  ) {
    return alertMessage(ERROR_MSG.STATION_NOT_EXIST);
  } else if (depart === arrive) {
    return alertMessage(ERROR_MSG.SAME_DEPART_ARRIVE);
  }
  return true;
};

const alertMessage = msg => {
  alert(msg);
  return false;
};

export const alertNoRoute = () => {
  alert(ERROR_MSG.NO_ROUTE);
  return;
};

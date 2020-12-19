import Dijkstra from "./Dijkstra.js";
import { visibleToggle, printTable } from "./view.js";
export function findRoads(departure, arrival) {
  let result;
  let num;
  if (document.getElementsByName("search-type")[0].checked === true) {
    num = 0;
    result = addValue(num, this, departure, arrival);
  } else {
    num = 1;
    result = addValue(num, this, departure, arrival);
  }
  visibleToggle();
  const takes = findTake(result, this);
  printTable(num, result, this, takes);
}

export const findTake = (result, stations) => {
  let takes = [];
  result.map((name, index) => {
    takes.push(stations.find((s) => s.name === name).nextStations);
  });
  let km = 0;
  let time = 0;
  for (let i = 0; i < takes.length - 1; i++) {
    const obj = takes[i].find((s) => Object.keys(s)[0] === result[i + 1]);
    km += obj[result[i + 1]][0];
    time += obj[result[i + 1]][1];
    console.log(km, time);
  }
  return [km, time];
};

export const addValue = (num, stations, departure, arrival) => {
  const dijkstra = new Dijkstra();
  stations.forEach((element) => {
    element.nextStations?.forEach((next) => {
      const nextStation = Object.keys(next)[0];
      dijkstra.addEdge(element.name, nextStation, next[nextStation][num]);
    });
  });
  return dijkstra.findShortestPath(departure, arrival);
};

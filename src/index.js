import Dijkstra from "./utils/Dijkstra.js";
import { stations, lines } from "./consts/data.js";
import { startManager } from "./component/manager.js";

export let stationData = [];
let lineData = [];
export let stationToStation = {};

export const dijkstra_time = new Dijkstra();
export const dijkstra_distance = new Dijkstra();

const App = () => {
  initializeData();
  constructData();

  startManager();
};

const initializeData = () => {
  stationData = stations;
  lineData = lines;

  stationData.map((station) => {
    stationToStation[station] = {};
  });
};

const constructData = () => {
  lineData.map((line) => {
    line.sequence.map((path) => {
      stationToStation[path.deptStation][path.destStation] = {
        dist: path.dist,
        time: path.time,
      };
      stationToStation[path.destStation][path.deptStation] = {
        dist: path.dist,
        time: path.time,
      };
      dijkstra_distance.addEdge(path.deptStation, path.destStation, path.dist);
      dijkstra_time.addEdge(path.deptStation, path.destStation, path.time);
    });
  });
};

App();

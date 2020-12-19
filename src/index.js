import Dijkstra from "./utils/Dijkstra.js";
import { stations, lines } from "./consts/data.js";
import { startManager } from "./component/manager.js";

let stationData = [];
let lineData = [];
let stationToStation = {};

const dijkstra_time = new Dijkstra();
const dijkstra_distance = new Dijkstra();

const App = () => {
  initializeData();
  constructSTS();

  startManager();
};

const initializeData = () => {
  stationData = stations;
  lineData = lines;

  stationData.map((station) => {
    stationToStation[station] = {};
  });
};

const constructSTS = () => {
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

export { dijkstra_distance, dijkstra_time, stationToStation };

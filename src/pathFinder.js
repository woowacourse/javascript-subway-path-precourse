import Dijkstra from "./utils/Dijkstra.js";
import { EDGE_INFO } from "./constants.js";
import { setResultTable } from "./views/dom.js";

const setMapByWeightType = (map, edges, weightType) => {
  for (let i = 0; i < edges.length; i++) {
    map.addEdge(
      edges[i][EDGE_INFO.DEPARTURE],
      edges[i][EDGE_INFO.ARRIVAL],
      edges[i][weightType]
    );
    map.addEdge(
      edges[i][EDGE_INFO.ARRIVAL],
      edges[i][EDGE_INFO.DEPARTURE],
      edges[i][weightType]
    );
  }
};

const caclTotal = (path, sections) => {
  let totalDistance = 0;
  let totalTime = 0;
  for (let i = 0; i < path.length - 1; i++) {
    for (let line in sections) {
      for (let j = 0; j < sections[line].length; j++) {
        if (
          path[i] === sections[line][j][EDGE_INFO.DEPARTURE] &&
          path[i + 1] === sections[line][j][EDGE_INFO.ARRIVAL]
        ) {
          totalDistance += sections[line][j][EDGE_INFO.DISTANCE];
          totalTime += sections[line][j][EDGE_INFO.TIME];
        }
      }
    }
  }
  setResultTable(totalDistance, totalTime);
};

export const findShortestPath = (departure, arrival, sections) => {
  const radioElems = document.getElementsByName("search-type");
  const dijkstra = new Dijkstra();
  if (radioElems[0].checked) {
    for (let line in sections)
      setMapByWeightType(dijkstra, sections[line], EDGE_INFO.DISTANCE);
  }
  if (radioElems[1].checked) {
    for (let line in sections)
      setMapByWeightType(dijkstra, sections[line], EDGE_INFO.TIME);
  }
  const findedPath = dijkstra.findShortestPath(departure, arrival);
  caclTotal(findedPath, sections);
};

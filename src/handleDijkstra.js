import { EDGE_INFO } from "./constants.js";
import { setResultTable } from "./views/dom.js";

export const setMapByWeightType = (map, edges, weightType) => {
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

export const calcTotal = (path, sections) => {
  let totalDistance = 0;
  let totalTime = 0;

  for (let i = 0; i < path.length - 1; i++) {
    for (let line in sections) {
      for (let j = 0; j < sections[line].length; j++) {
        if (
          (path[i] === sections[line][j][EDGE_INFO.DEPARTURE] &&
            path[i + 1] === sections[line][j][EDGE_INFO.ARRIVAL]) ||
          (path[i + 1] === sections[line][j][EDGE_INFO.DEPARTURE] &&
            path[i] === sections[line][j][EDGE_INFO.ARRIVAL])
        ) {
          totalDistance += sections[line][j][EDGE_INFO.DISTANCE];
          totalTime += sections[line][j][EDGE_INFO.TIME];
        }
      }
    }
  }
  setResultTable(totalDistance, totalTime, path);
};

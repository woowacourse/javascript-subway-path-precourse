import { sections } from "./data/subwayInfo.js";
import Dijkstra from "./utils/Dijkstra.js";
import { EDGE_INFO } from "./constants.js";

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

const caclTotalDistance = () => {};
const caclTotalTime = () => {};

export const findShortestPath = (departure, arrival) => {
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

  console.log(dijkstra.findShortestPath(departure, arrival));
};

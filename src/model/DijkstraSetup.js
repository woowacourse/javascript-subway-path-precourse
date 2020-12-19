import { stationNodes } from "../components/baseData/stationNodes.js";
import Dijkstra from "../utils/Dijkstra.js";

export const dijkstraSetup = (timeOrDistance) => {
    const dijkstra = new Dijkstra();

    for (const stationNode of stationNodes) {
        dijkstra.addEdge(stationNode.startStation, stationNode.endStation, stationNode.selection[timeOrDistance]);
    }

    return dijkstra
}

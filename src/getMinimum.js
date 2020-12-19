import Dijkstra from "./utils/Dijkstra.js";
import {lines} from './data.js'; 

export function minPath(departure, arrival, type) {
    const dijkstra = new Dijkstra();
    importDataDijkstra(dijkstra, type);
    const result = dijkstra.findShortestPath(departure, arrival);
    return result;
}

function importDataDijkstra(dijkstra, type) {
    for (let line of lines) {
        for (let i=0; i<line.length-2; i++) {
            dijkstra.addEdge(line[i], line[i+2], line[i+1][type]);
        }
    }
    return dijkstra;
}
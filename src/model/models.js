import Dijkstra from "../utils/Dijkstra.js";
import LinesModel from "./lines-model.js";

export default class Models {
  constructor(initialInput) {
    this._linesModel = new LinesModel(initialInput);
    this._distDijkstra = new Dijkstra();
    this._durationDijkstra = new Dijkstra();
    this.parseInitialInput(initialInput);
    /*
    const test = this._distDijkstra.findShortestPath("교대", "양재시민의숲");
    const test2 = this._durationDijkstra.findShortestPath(
      "양재",
      "양재시민의숲"
    );
    console.log(test);
    */
  }
  parseInitialInput(lines) {
    lines.forEach((line) => {
      this._parseToDistDijkstra({
        stationsOfLine: line.stationsOfLine,
        distanceWeight: line.distanceWeight,
      });
      this._parseToDurationDijkstra({
        stationsOfLine: line.stationsOfLine,
        durationWeight: line.durationWeight,
      });
    });
  }

  _parseToDistDijkstra({ stationsOfLine, distanceWeight }) {
    for (let i = 0; i < distanceWeight.length; i++) {
      this._distDijkstra.addEdge(
        stationsOfLine[i],
        stationsOfLine[i + 1],
        distanceWeight[i]
      );
    }
  }
  _parseToDurationDijkstra({ stationsOfLine, durationWeight }) {
    for (let i = 0; i < durationWeight.length; i++) {
      this._durationDijkstra.addEdge(
        stationsOfLine[i],
        stationsOfLine[i + 1],
        durationWeight[i]
      );
    }
  }
}

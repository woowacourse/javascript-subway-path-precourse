import { checkAndReturnInput } from "../model/InputUtil.js"
import { dijkstraSetup } from "../model/DijkstraSetup.js"
import { calculateDistance, calculateTime } from "../model/calculator.js"
import { makeResultHTML } from "../view/resultView.js"

export const addEventToSearchButton = () => {
    document.querySelector("#search-button").addEventListener("click", () => {
        try {
            const stationInput = checkAndReturnInput();
            const dijkstra = dijkstraSetup(stationInput[2]);
            const result = dijkstra.findShortestPath(stationInput[0], stationInput[1]);

            makeResultHTML(calculateDistance(result), calculateTime(result), result, stationInput[2]);
        } catch (error) {
            alert(error)
        }
    })
}
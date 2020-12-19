import { checkAndReturnInput } from "../model/InputUtil.js"
import { dijkstraSetup } from "../model/DijkstraSetup.js"
import { calculateDistance, calculateTime } from "../model/calculator.js"
import { makeResultHTML } from "../view/resultView.js"
import { text } from "../components/text/text.js"

export const addEventToSearchButton = () => {
    document.querySelector("#search-button").addEventListener("click", () => {
        try {
            const stationInput = checkAndReturnInput();
            const dijkstra = dijkstraSetup(stationInput[text.SELECTION]);
            const result = dijkstra.findShortestPath(stationInput[text.START_STATION], stationInput[text.END_STATION]);

            makeResultHTML(calculateDistance(result), calculateTime(result), result, stationInput[text.SELECTION]);
        } catch (error) {
            alert(error)
        }
    })
}
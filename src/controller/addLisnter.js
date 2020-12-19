import { checkAndReturnInput } from "../model/validateInput.js"
import { dijkstraSetup } from "../model/DijkstraSetup.js"

export const addEventToSearchButton = () => {
    document.querySelector("#search-button").addEventListener("click", () => {
        try {
            const stationInput = checkAndReturnInput();
            const dijkstra = dijkstraSetup("time");
            const result = dijkstra.findShortestPath(stationInput[0], stationInput[1]);
        } catch (error) {
            alert(error)
        }
    })
}
import processStationNames from "./process-station-names.js";
import processSubwayDirection from "./process-subway-direction.js";

export default class Index {
    constructor() {
        this.processStationNames = new processStationNames();
        this.processSubwayDirection = new processSubwayDirection();
        this.searchButton = document.getElementById("search-button");
        this.searchButton.addEventListener("click", () => {this.printResult()});
    }

    printResult() {
        this.processStationNames.getStationNames();
    }
}

new Index();
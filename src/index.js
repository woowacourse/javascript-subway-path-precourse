import processStationNames from "./process-station-names.js?ver=31";
import processSubwayDirection from "./process-subway-direction.js?ver=51";

export default class Index {
    constructor() {
        this.processStationNames = new processStationNames();
        this.processSubwayDirection = new processSubwayDirection();
        this.searchButton = document.getElementById("search-button");
        this.searchButton.addEventListener("click", () => {this.printResult()});
    }

    checkRadioButton() {
        const radioButton = document.getElementsByName("search-type");
        let radioValue;
        radioButton.forEach(button => {
            if(button.checked == true) {
                radioValue = button.value;
            }
        });
        return radioValue;
    }

    printResult() {
        const stationNames = this.processStationNames.getStationNames();
        const radioValue = this.checkRadioButton();
        let result;
        if(stationNames !== []) {
            result = radioValue === "distance" ? this.processSubwayDirection.getMinDistance(stationNames) : this.processSubwayDirection.getMinTime(stationNames);
        }
        console.log(result);
    }
}

new Index();
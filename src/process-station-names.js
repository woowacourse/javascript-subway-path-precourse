import {stations} from "./utils/data.js";
import {
    removeWhiteSpaceValue,
    isEmpty,
    isRightLength
} from "./utils/common.js";

export default class processStationNames {
    constructor() {
        this.stations = stations;
    }

    checkStationInData(name) {
        return this.stations.findIndex(station => station.name === name);
    }

    getAlertText(stationName, stationType) {
        let text = "";
        if(isEmpty(stationName)) {
            text = `${stationType}역을 입력해주세요`;
        }
        else if(!isRightLength(stationName)) {
            text = `${stationType}역을 두글자 이상 입력해주세요`;
        }
        else if(this.checkStationInData(stationName) === -1){
            text = `${stationName}역은 등록되지 않은 역입니다`;
        }
        return text;
    }

    setAlert(departureText, arrivalText, departureStationName, arrivalStationName) {
        let isCorrect = false;
        if(departureText !== "") {
            alert(departureText);
        }
        else if(arrivalText !== "") {
            alert(arrivalText);
        }
        else if(departureStationName === arrivalStationName){
            alert("출발역과 도착역을 다르게 입력해주세요");
        }
        else {
            isCorrect = true;
        }
        return isCorrect;
    }

    checkStationNames(departureStationName, arrivalStationName) {
        const departureText = this.getAlertText(departureStationName, "출발");
        const arrivalText = this.getAlertText(arrivalStationName, "도착");
        return this.setAlert(departureText, arrivalText, departureStationName, arrivalStationName);
    }

    getStationNames() {
        const departureStationName = removeWhiteSpaceValue(document.getElementById("departure-station-name-input").value);
        const arrivalStationName = removeWhiteSpaceValue(document.getElementById("arrival-station-name-input").value);
        const isCorrect = this.checkStationNames(departureStationName, arrivalStationName);
        let stationNames = [];
        if(isCorrect) {
            stationNames = [departureStationName, arrivalStationName];
        }
        return stationNames;
    }
}
import { text, alertText } from "../text.js"
import { stations } from "../stations.js"

export const checkAndReturnInput = () => {
    const startStation = document.getElementById("departure-station-name-input").value;
    const endStation = document.getElementById("arrival-station-name-input").value;
    const selection = getSeletion();

    checkInput(startStation);
    checkInput(endStation);
    checkStartEndSame(startStation, endStation);

    return [startStation, endStation, selection];
}


const checkStartEndSame = (startStation, endStation) => {
    if (isStartStationSameWithEnd(startStation, endStation)) {
        throw alertText.START_STATION_SAME_WHIT_END;
    }

}

const checkInput = (input) => {

    if (isInputEmpty(input)) {
        throw alertText.EMPTY_INPUT;
    }

    if (isInputShorterThanTwo(input)) {
        throw alertText.SHORTER_THAN_TWO;
    }

    if (isStationNotExite(input)) {
        throw alertText.STATION_NOT_EXITE;
    }
}

const isStartStationSameWithEnd = (startStaion, endStation) => {
    return startStaion === endStation;
}

const isInputEmpty = (input) => {
    return input.trim() === text.EMPTY;
}

const isInputShorterThanTwo = (input) => {
    return input.length < text.TWO;
}

const isStationNotExite = (input) => {
    return !Object.keys(stations).includes(input);
}

const getSeletion = () => {
    const checkBoxs = document.getElementsByName("search-type");
    for (const checkBox of checkBoxs) {
        if (checkBox.checked == true) {
            return checkBox.value;
        }
    }
}
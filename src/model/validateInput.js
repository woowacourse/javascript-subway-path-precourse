import { text, alertText } from "../text.js"

export const checkAndReturnInput = () => {
    const startStation = document.getElementById("departure-station-name-input").value;
    const endStation = document.getElementById("arrival-station-name-input").value;
    checkInput(startStation);
    checkInput(endStation);
    checkStartEndSame(startStation, endStation);
    return [startStation, endStation];
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
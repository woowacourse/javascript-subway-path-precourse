import { RESULT } from "./constants.js";

export function appendDataToTable(distance, time, pathMessage) {
    RESULT.DISTANCE.innerText = distance;
    RESULT.TIME.innerText = time;
    RESULT.PATH.innerText = pathMessage;
}

export function changeTypeTitle(type) {
    RESULT.TYPE.innerText = type;
}

export function display() {
    RESULT.DISPLAY.style.display = 'block';
}
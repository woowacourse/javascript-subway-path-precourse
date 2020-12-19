import { RESULT } from "./constants.js";

export function appendDataToTable(distance, time, pathMessage) {
    RESULT.DISTANCE.append = distance;
    RESULT.TIME.append = time;
    RESULT.TIME.append = pathMessage;
}

export function changeTypeTitle(type) {
    RESULT.TYPE.innerText = type;
}
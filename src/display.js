import { RESULT } from "./constants.js";

export function appendDistanceToTable(distance){
    RESULT.DISTANCE.innerText = distance;
}

export function appendTimeToTable(time){
    RESULT.TIME.innerText = time;
}

export function appendPathToTable(path) {
    RESULT.PATH.innerText = path;
}

export function changeTypeTitle(type) {
    if (type==='distance'){
        RESULT.TYPE.innerText = '최단거리';
    }
    if (type==='time'){
        RESULT.TYPE.innerText = '최소시간';
    }
}

export function display() {
    changeTypeTitle(this.type);
    RESULT.DISPLAY.style.display = 'block';
}
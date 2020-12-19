import {findData} from "./index.js";

export function isUnderTwoCharacters() { 
    let departureStation = document.getElementById('departure-station-name-input').value;
    let arrivalStation = document.getElementById('arrival-station-name-input').value;

    if (departureStation.length < 2 || arrivalStation.length < 2) {
        console.log(departureStation);
        alert("두자리 이상의 역 이름을 입력해주세요.");
    }
    isNotUsuableDepartureStation(departureStation, arrivalStation);
    findData(departureStation, arrivalStation)
}

export let stationNameList = ['교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'];
export function isNotUsuableDepartureStation(departureStation, arrivalStation) {
    if ((stationNameList.includes(departureStation) === false) || (stationNameList.includes(arrivalStation) === false)) {
        alert("사용 가능한 역 이름(들)이 아닙니다.");
    }
    isSameStations(departureStation, arrivalStation);
}

export function isSameStations(departureStation, arrivalStation) {
    if (departureStation === arrivalStation) {
        alert("출발역과 도착역이 같을 수 없습니다.");
    }
}

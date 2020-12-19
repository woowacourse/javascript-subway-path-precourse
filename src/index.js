import { lineTwo, lineThree, lineBoondang } from "./data.js";
import Dijkstra from "./utils/Dijkstra.js";


console.log(lineTwo[1]); // lineTwo 리스트의 첫번째 딕셔너리 출력


//Validation
function isUnderTwoCharacters() { 
    let departureStation = document.getElementById('departure-station-name-input').value;
    let arrivalStation = document.getElementById('arrival-station-name-input').value;

    if (departureStation.length < 2 || arrivalStation.length < 2) {
        console.log(departureStation);
        alert("두자리 이상의 역 이름을 입력해주세요.");
    }
    isNotUsuableDepartureStation(departureStation, arrivalStation);
}

let stationNameList = ['교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'];
function isNotUsuableDepartureStation(departureStation, arrivalStation) {
    if ((stationNameList.includes(departureStation) === false) || (stationNameList.includes(arrivalStation) === false)) {
        alert("사용 가능한 역 이름(들)이 아닙니다.");
    }
    isSameStations(departureStation, arrivalStation);
}

function isSameStations(departureStation, arrivalStation) {
    if (departureStation === arrivalStation) {
        alert("출발역과 도착역이 같을 수 없습니다.");
    }
}

let findRouteButton = document.getElementById('search-route');
findRouteButton.addEventListener('click', showResult);

function showResult() {
    isUnderTwoCharacters();
    document.getElementById("result").style.display="block";

}

let stationsLineTwo = ['교대', ]

//입력된 역을 데이터에서 찾기
//데이터에서 찾으면 해당 역의 distance와 time을 반환하여 array에 push
// function findData() {
//     for (let i = 0; i < )
// }

// 2호선 총거리 구하기
// function getTotalDistancelineTwo() {
//     const dijkstra = new Dijkstra();
//     for (let i = 0; i < lineTwo.length; i += 1) {

//     }
// }

function getTotalTime() {

}




// const dijkstra = new Dijkstra()
// dijkstra.addEdge(lineTwo[0].station, lineTwo[1].station, lineTwo[0].distance);
// dijkstra.addEdge(lineTwo[1].station, lineTwo[2].station, lineTwo[1].distance);
// dijkstra.addEdge(lineTwo[0].station, lineTwo[2].station, lineTwo[0].distance + lineTwo[1].distance);

// const result = dijkstra.findShortestPath(lineTwo[0].station, lineTwo[2].station);
// console.log(result);


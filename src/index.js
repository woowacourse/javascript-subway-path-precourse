import { lineTwo, lineThree, lineBoondang } from "./data.js";
import Dijkstra from "./utils/Dijkstra.js";


console.log(lineTwo[1]); // lineTwo 리스트의 첫번째 딕셔너리 출력

let departStation = document.getElementById.length('departure-station-name-input').value;
let arrivalStation = document.getElementById.length('arrival-station-name-input').value;
//Validation

function isUpperTwoCharactersDeparture() { 
    if (departStation.length < 2) {
        alert("두자리 이상의 역 이름을 입력해주세요.")
    }
}

function isUpperTwoCharactersArrival() {
    if (arrivalStation.length < 2) {
        alert("두자리 이상의 역 이름을 입력해주세요.")
    }
}







//2호선 총거리 구하기
// function getTotalDistancelineTwo() {
//     for (let i = 0; i < lineTwo.length; i += 1) {

//     }
// }

// function getTotalTime() {

// }




// const dijkstra = new Dijkstra()
// dijkstra.addEdge(lineTwo[0].station, lineTwo[1].station, lineTwo[0].distance);
// dijkstra.addEdge(lineTwo[1].station, lineTwo[2].station, lineTwo[1].distance);
// dijkstra.addEdge(lineTwo[0].station, lineTwo[2].station, lineTwo[0].distance + lineTwo[1].distance);

// const result = dijkstra.findShortestPath(lineTwo[0].station, lineTwo[2].station);
// console.log(result);


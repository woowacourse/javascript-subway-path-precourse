import { lineTwo, lineThree, lineBoondang } from "./data.js";
import Dijkstra from "./utils/Dijkstra.js";


//Validation
function isUnderTwoCharacters() { 
    let departureStation = document.getElementById('departure-station-name-input').value;
    let arrivalStation = document.getElementById('arrival-station-name-input').value;

    if (departureStation.length < 2 || arrivalStation.length < 2) {
        console.log(departureStation);
        alert("두자리 이상의 역 이름을 입력해주세요.");
    }
    isNotUsuableDepartureStation(departureStation, arrivalStation);
    findData(departureStation, arrivalStation)
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

const stationsLineTwo = ['교대', '강남', '역삼'];
function findData(departureStation, arrivalStation) {
    if (stationsLineTwo.includes(departureStation) && stationsLineTwo.includes(arrivalStation)){
        let v1 = '', v2 = '', v3 = '';
        let distance = 0, time = 0;
        let indexOfDeparture = 0;
        let indexOfArrival = 0;
        for (let i = 0; i < lineTwo.length; i += 1) {
            if (departureStation === lineTwo[i].station) {
                v1 = lineTwo[i].station;
                distance += lineTwo[i].distance;
                time += lineTwo[i].time;
                indexOfDeparture = lineTwo.indexOf(lineTwo[i]);
            }
            if (arrivalStation === lineTwo[i].station) {
                v3 = lineTwo[i].station;
                indexOfArrival = lineTwo.indexOf(lineTwo[i]);
            }
            if (indexOfDeparture - indexOfArrival > 1) {
                v2 = lineTwo[i-1].station;
                distance += lineTwo[i].distance;
                time += lineTwo[i].time;
            }  
        }
        getShortestDistance(v1, v2, v3, distance, time);
    }
    
}

function getShortestDistance(v1, v2, v3, distance, time) {
    let dijkstra = new Dijkstra();
    dijkstra.addEdge(v1, v2, lineTwo[0].distance);
    dijkstra.addEdge(v2, v3, lineTwo[1].distance);
    dijkstra.addEdge(v1, v3, lineTwo[0].distance + lineTwo[1].distance);
    const result = dijkstra.findShortestPath(v1,v3);
    
    makeTable(distance, time, result);
}


function makeTable( distance, time, result) {
    let container = document.getElementById('print-result-container');
    let resultTable = document.createElement('table');
    let headerRow = resultTable.insertRow(0);
    let firstRow = resultTable.insertRow(1);
    let secondRow = resultTable.insertRow(2);
    let headerCell1 = headerRow.insertCell(0);
    let headerCell2 = headerRow.insertCell(1);
    let firstRowCell1 = firstRow.insertCell(0);
    let firstRowCell2 = firstRow.insertCell(1);
    let secondRowCell1 = secondRow.insertCell(0);
    headerCell1.innerHTML = '총 거리';
    headerCell2.innerHTML = '총 소요 시간';
    firstRowCell1.innerHTML = `${distance}km`;
    firstRowCell2.innerHTML = `${time}분`;
    secondRowCell1.innerHTML = `${result}`;
    resultTable.border = 1;
    resultTable.id = 'print-result-table';
    container.appendChild(resultTable);
}


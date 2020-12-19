import { lineTwo, lineThree, lineBoondang } from "./data.js";
import Dijkstra from "./utils/Dijkstra.js";
import {isUnderTwoCharacters} from "./validation.js";

let findRouteButton = document.getElementById('search-route');
findRouteButton.addEventListener('click', showResult);

function showResult() {
    isUnderTwoCharacters();
    document.getElementById("result").style.display="block";
}

export function findData(departureStation, arrivalStation) {
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
    getShortestPath(v1, v2, v3, distance, time);
}

function getShortestPath(v1, v2, v3, distance, time) {
    let dijkstra = new Dijkstra();
    dijkstra.addEdge(v1, v2, lineTwo[0].distance);
    dijkstra.addEdge(v2, v3, lineTwo[1].distance);
    dijkstra.addEdge(v1, v3, lineTwo[0].distance + lineTwo[1].distance);
    const shortestPathOfDistance = dijkstra.findShortestPath(v1,v3);

    dijkstra.addEdge(v1, v2, lineTwo[0].time);
    dijkstra.addEdge(v2, v3, lineTwo[1].time);
    dijkstra.addEdge(v1, v3, lineTwo[0].time + lineTwo[1].time);
    const shortestPathOfTime = dijkstra.findShortestPath(v1,v3);

    makeTable(distance, time, shortestPathOfDistance, shortestPathOfTime);
}


function makeTable( distance, time, shortestPathOfDistance) {
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
    secondRowCell1.innerHTML = `${shortestPathOfDistance}`;
    resultTable.border = 1;
    resultTable.id = 'print-result-table';
    container.appendChild(resultTable);
}
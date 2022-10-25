import Dijkstra from "./utils/Dijkstra.js"
import {station, stationType, route} from "./utils/data.js"
const dijkstra = new Dijkstra()

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const departureStationText = $('#departure-station-name-input');
const arrivalStationText = $('#arrival-station-name-input');
const searchBtn = $('.search-btn')
const distanceBtn = $('.distanceBtn')
const timeBtn = $('.tiemBtn')


function saveRoute() {
    dijkstra.addEdge('교대','강남',2);
    dijkstra.addEdge('강남','역삼',2);
    dijkstra.addEdge('교대','남부터미널',3);
    dijkstra.addEdge('남부터미널','양재',6);
    dijkstra.addEdge('양재','매봉',1);
    dijkstra.addEdge('강남','양재',2);
    dijkstra.addEdge('양재','양재시민의숲',10);
}

console.log(dijkstra.findShortestPath('교대','양재'))

distanceBtn.addEventListener('click',saveRoute)
searchBtn.addEventListener('click', ()=> {
    const start = departureStationText.value
    const end = arrivalStationText.value
    console.log(dijkstra.findShortestPath(start,end))
    let routeArr = dijkstra.findShortestPath(start, end)

    routeArr.forEach((station) => {
        
    })
    
})



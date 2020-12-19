import { stations, lines, routes } from './data.js';
import Dijkstra from './utils/Dijkstra.js';

const departureStationNameInput = document.getElementById('departure-station-name-input');
const arrivalStationNameInput = document.getElementById('arrival-station-name-input');
const searchButton = document.getElementById('search-button');
const searchTypeRadioButton = document.querySelector('input[name="search-type"]');

export default class SubwayPath {
    constructor() {
        this.stations = stations;
        this.lines = lines;
        this.routes = routes;
        [this.distanceDijkstra, this.timeDijkstra] = this.createDijkstras();
        
        this.setEventListeners();
    }

    setEventListeners() {
        searchButton.addEventListener('click', this.clickSearchButton);
    }

    createDijkstras() {
        const distanceDijkstra = new Dijkstra();
        const timeDijkstra = new Dijkstra();
        this.routes.forEach(route => {
            distanceDijkstra.addEdge(route.departure, route.arrival, route.distance);
            timeDijkstra.addEdge(route.departure, route.arrival, route.time);
        });
        return [distanceDijkstra, timeDijkstra];
    }

    clickSearchButton() {
        const departureStation = departureStationNameInput.value;
        const arrivalStation = arrivalStationNameInput.value;
        const searchType = searchTypeRadioButton.value;

        console.log(departureStation, arrivalStation, searchType);
    }
}

new SubwayPath();
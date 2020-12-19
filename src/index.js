import { stations, lines, routes } from './data.js';
import Dijkstra from './utils/Dijkstra.js';

const departureStationNameInput = document.getElementById('departure-station-name-input');
const arrivalStationNameInput = document.getElementById('arrival-station-name-input');
const searchButton = document.getElementById('search-button');

export default class SubwayPath {
    constructor() {
        this.stations = stations;
        this.lines = lines;
        this.routes = routes;
        [this.distanceDijkstra, this.timeDijkstra] = this.createDijkstras();
        console.log(this.distanceDijkstra, this.timeDijkstra);
        this.setEventListeners();
    }

    setEventListeners() {
        searchButton.addEventListener('click', this.clickSearchButton.bind(this));
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
        const searchType = document.querySelector('input[name="search-type"]:checked').value;

        console.log(departureStation, arrivalStation, searchType);
        const path = this.findPathByDijkstra(departureStation, arrivalStation, searchType);
        const result = this.calculatePathResult(path);
        console.log(result);
    }

    findPathByDijkstra(departure, arrival, searchType) {
        if (searchType === '최단거리') {
            return this.distanceDijkstra.findShortestPath(departure, arrival);
        } else if (searchType === '최소시간') {
            return this.timeDijkstra.findShortestPath(departure, arrival);
        }
        return null;
    }

    calculatePathResult(path) {
        let totalDistance = 0;
        let totalTime = 0;
        for (let i = 1; i < path.length; i++) {
            const pathIndex = this.routes.findIndex(el => el.arrival === path[i] && el.departure === path[i - 1]);
            console.log(pathIndex);
            totalDistance += this.routes[pathIndex].distance;
            totalTime += this.routes[pathIndex].time;
        }

        return {
            pathString: path.join('→'),
            totalDistance,
            totalTime,
        };
    }
}

new SubwayPath();
import { stations, lines, routes } from './data.js';
import Dijkstra from './utils/Dijkstra.js';
import { ViewController, DOMStrings, constants } from './view.js';

const departureStationNameInput = document.getElementById(DOMStrings.DEPARTURE_STATION_NAME_INPUT);
const arrivalStationNameInput = document.getElementById(DOMStrings.ARRIVAL_STATION_NAME_INPUT);
const searchButton = document.getElementById(DOMStrings.SEARCH_BUTTON);

export default class SubwayPath {
    constructor() {
        this.stations = stations;
        this.lines = lines;
        this.routes = routes;
        this.viewController = new ViewController();
        [this.distanceDijkstra, this.timeDijkstra] = this.createDijkstras();
        this.setEventListeners();
    }

    setEventListeners() {
        searchButton.addEventListener('click', this.clickSearchButton.bind(this));
    }

    createDijkstras() {
        const distanceDijkstra = new Dijkstra();
        const timeDijkstra = new Dijkstra();
        this.routes.forEach(route => {
            distanceDijkstra.addEdge(route.stations[0], route.stations[1], route.distance);
            timeDijkstra.addEdge(route.stations[0], route.stations[1], route.time);
        });
        return [distanceDijkstra, timeDijkstra];
    }

    clickSearchButton() {
        const departureStation = departureStationNameInput.value;
        const arrivalStation = arrivalStationNameInput.value;
        const searchType = document.querySelector(DOMStrings.CHECKED_RADIO_BUTTON).value;
        const path = this.findPathByDijkstra(departureStation, arrivalStation, searchType);
        const result = this.calculatePathResult(path);
        this.viewController.clearResultDiv();
        this.viewController.printSearchResult(result, searchType);
    }

    findPathByDijkstra(departure, arrival, searchType) {
        if (searchType === constants.SHORTEST_DISTANCE) {
            return this.distanceDijkstra.findShortestPath(departure, arrival);
        } else if (searchType === constants.SHORTEST_TIME) {
            return this.timeDijkstra.findShortestPath(departure, arrival);
        }
    }

    calculatePathResult(path) {
        let totalDistance = 0;
        let totalTime = 0;
        for (let i = 1; i < path.length; i++) {
            const pathIndex = this.routes.findIndex(route => 
                route.stations.includes(path[i]) && 
                route.stations.includes(path[i - 1]));
            totalDistance += this.routes[pathIndex].distance;
            totalTime += this.routes[pathIndex].time;
        }
        return {
            pathString: path.join(constants.RESULT_ARROW),
            totalDistance,
            totalTime,
        };
    }
}

new SubwayPath();
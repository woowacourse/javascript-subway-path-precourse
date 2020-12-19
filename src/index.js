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

        this.setEventListeners();
    }

    setEventListeners() {
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

}

new SubwayPath();
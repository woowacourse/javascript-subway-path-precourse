import { stations, lines, routes } from './data.js';

export default class SubwayPath {
    constructor() {
        this.stations = stations;
        this.lines = lines;
        this.routes = routes;
    }
}
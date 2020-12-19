import {stations} from '../data/station-data.js';
import {lines} from '../data/line-data.js';
import {sections} from '../data/section-data.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class SubwayDistanceMap {
	constructor() {
		this.subwayDistanceMap = new Dijkstra();

		this.setSubwayStations();
		this.setSubwayDistances();
	}

	getStations = () => {
		return 	stations;
	}

	getLines = () => {
		return lines;
	}

	getSections = () => {
		return sections;
	}

	setSubwayStations = () => {
		for (let station of stations) {
			this.subwayDistanceMap.addVertex(station.name);
		}
	}

	setSubwayDistances = () => {
		for (let section of sections) {
			this.subwayDistanceMap.addEdge(section.startStation, section.endStation, section.distance);
		}
	}

	getShortestDistancePath = (departureStation, arrivalStation) => {
		const shortestDistance = this.subwayDistanceMap.findShortestPath(departureStation, arrivalStation);
		
		return shortestDistance;
	}
}
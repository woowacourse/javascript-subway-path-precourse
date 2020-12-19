import {stations} from '../data/station-data.js';
import {lines} from '../data/line-data.js';
import {sections} from '../data/section-data.js';
import Dijkstra from '../utils/Dijkstra.js';

export default class SubwayTimeMap {
	constructor() {
		this.subwayTimeMap = new Dijkstra();

		this.setSubwayStations();
		this.setSubwayTimes();
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

	setSubwayTimes = () => {
		for (let section of sections) {
			this.subwayDistanceMap.addEdge(section.startStation, section.endStation, section.time);
		}
	}

	getShortestTime = (departureStation, arrivalStation) => {
		const shortestTime = this.subwayDistanceMap.findShortestPath(departureStation, arrivalStation);
		
		return shortestTime;
	}
}
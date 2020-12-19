import {stations} from '../data/station-data.js';
import {lines} from '../data/line-data.js';
import {sections} from '../data/section-data.js';
import Dijkstra from '../utils/Dijkstra.js';
import {isIncludesBothStations} from '../services/validation.js';

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
			this.subwayDistanceMap.addEdge(section.connectedStations[0], section.connectedStations[1], section.distance);
		}
	}

	getShortestDistancePath = (departureStation, arrivalStation) => {
		const shortestDistancePath = this.subwayDistanceMap.findShortestPath(departureStation, arrivalStation);
		
		return shortestDistancePath;
	}

	getShortestTotalDistance = shortestDistancePath => {
		let totalStationDistance = 0;

		for (let stationIndex = 1; stationIndex < shortestDistancePath.length; stationIndex++) {
			let startStation = shortestDistancePath[stationIndex - 1];
			let endStation = shortestDistancePath[stationIndex];
			let stationDistance = this.getStationDistance(sections, startStation, endStation);

			totalStationDistance += stationDistance;
		}

		return totalStationDistance;
	}

	getStationDistance = (sections, startStation, endStation) => {
		for (let section of sections) {
			if (isIncludesBothStations(section.connectedStations, startStation, endStation)) {
				return section.distance;
			}
		}
	}
}
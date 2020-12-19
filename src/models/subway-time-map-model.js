import {stations} from '../data/station-data.js';
import {lines} from '../data/line-data.js';
import {sections} from '../data/section-data.js';
import Dijkstra from '../utils/Dijkstra.js';
import { isIncludesBothStations } from '../services/validation.js';

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
			this.subwayTimeMap.addVertex(station.name);
		}
	}

	setSubwayTimes = () => {
		for (let section of sections) {
			this.subwayTimeMap.addEdge(section.connectedStations[0], section.connectedStations[1], section.time);
		}
	}

	getShortestTimePath = (departureStation, arrivalStation) => {
		const shortestTimePath = this.subwayTimeMap.findShortestPath(departureStation, arrivalStation);
		console.log(this.subwayTimeMap);

		return shortestTimePath;
	}

	getShortestTotalTimeAndTotalDistance = shortestTimePath => {
		let shortestTotalSectionTime = 0;
		let totalSectionDistance = 0;

		for (let stationIndex = 1; stationIndex < shortestTimePath.length; stationIndex++) {
			let startStation = shortestTimePath[stationIndex - 1];
			let endStation = shortestTimePath[stationIndex];
			let sectionTime = this.getSectionTime(sections, startStation, endStation);
			let sectionDistance = this.getSectionDistance(sections, startStation, endStation);
			
			shortestTotalSectionTime += sectionTime;
			totalSectionDistance += sectionDistance;
		}
		
		return [shortestTotalSectionTime, totalSectionDistance]
	}

	getSectionTime = (sections, startStation, endStation) => {
		for (let section of sections) {
			if (isIncludesBothStations(section.connectedStations, startStation, endStation)) {
				return section.time;
			}
		}
	}

	getSectionDistance = (sections, startStation, endStation) => {
		for (let section of sections) {
			if (isIncludesBothStations(section.connectedStations, startStation, endStation)) {
				return section.distance;
			}
		}
	}
}
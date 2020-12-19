import SubwayDistanceMap from '../models/subway-distance-map-model.js';
import SubwayTimeMap from '../models/subway-time-map-model.js';
import SubwayPathInput from '../views/subway-path-input.js';
import SubwayPathOutput from '../views/Subway-path-output.js';
import {isNotValidInput} from '../services/validation.js';

const RADIO_SHORTEST_DISTANCE_VALUE = 'shortest-distance';
const RADIO_SHORTEST_TIME_VALUE = 'shortest-time';
const SHORTEST_DISTANCE_KOR = '최단거리';
const SHORTEST_TIME_KOR = '최소시간';

export default class SubwayPathController {
	constructor() {
		this.subwayPathOutput = new SubwayPathOutput();
		this.subwayPathInput = new SubwayPathInput();
		this.subwayDistanceMap = new SubwayDistanceMap();
		this.subwayTimeMap = new SubwayTimeMap();

		this.handleSearchInputs();
	}

	handleSearchInputs = () => {
		this.subwayPathInput.bindSearchButton(this.getResultData);
	}

	getResultData = searchInputs => {
		let departureStationName;
		let arrivalStationName;
		let radioSelect;

		[departureStationName, arrivalStationName, radioSelect] = [...searchInputs];

		if (isNotValidInput(departureStationName, arrivalStationName)) {
			return;
		}

		this.getSelectedRadioData(radioSelect, departureStationName, arrivalStationName);
	}

	getSelectedRadioData = (radioSelect, departureStationName, arrivalStationName) => {
		if (radioSelect == RADIO_SHORTEST_DISTANCE_VALUE) {
			this.getShortestDistanceData(departureStationName, arrivalStationName)
		} else if (radioSelect == RADIO_SHORTEST_TIME_VALUE) {
			this.getShortestTimeData(departureStationName, arrivalStationName);
		}
	}

	getShortestDistanceData = (departureStationName, arrivalStationName) => {
		const radioSelect = SHORTEST_DISTANCE_KOR;
		const shortestDistancePath = this.subwayDistanceMap.getShortestDistancePath(departureStationName, arrivalStationName);
		let shortestTotalDistance;
		let totalTime;

		[shortestTotalDistance, totalTime] = this.subwayDistanceMap.getShortestTotalDistanceAndTotalTime(shortestDistancePath);
		
		this.renderShortestDistanceResult([radioSelect, shortestTotalDistance, totalTime, shortestDistancePath]);
	}

	renderShortestDistanceResult = resultTableData => {
		this.subwayPathOutput.renderResult(resultTableData);
	}

	getShortestTimeData = (departureStationName, arrivalStationName) => {
		const radioSelect = SHORTEST_TIME_KOR;
		const shortestTimePath = this.subwayTimeMap.getShortestTimePath(departureStationName, arrivalStationName);
		let shortestTotalTime;
		let totalDistance;

		[shortestTotalTime, totalDistance] = this.subwayTimeMap.getShortestTotalTimeAndTotalDistance(shortestTimePath);
		
		this.renderShortestDistanceResult([radioSelect, totalDistance, shortestTotalTime, shortestTimePath]);
	}

	renderShortestTimeResult = resultTableData => {
		this.subwayPathOutput.renderResult(resultTableData);
	}
}
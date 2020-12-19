import SubwayDistanceMap from '../models/subway-distance-map-model.js';
import SubwayPathInput from '../views/subway-path-input.js';
import SubwayPathOutput from '../views/Subway-path-output.js';

export default class SubwayPathController {
	constructor() {
		this.subwayPathOutput = new SubwayPathOutput();
		this.subwayPathInput = new SubwayPathInput();
		this.subwayDistanceMap = new SubwayDistanceMap();

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

		const shortestDistancePath = this.subwayDistanceMap.getShortestDistancePath(departureStationName, arrivalStationName);
		const shortestTotalDistance = this.subwayDistanceMap.getShortestTotalDistance(shortestDistancePath);
		const totalTime = 0;
		const resultTableData = [radioSelect, shortestTotalDistance, totalTime, shortestDistancePath];
		this.subwayPathOutput.renderResult(resultTableData);
	}
}
import SubwayPathInput from '../views/subway-path-input.js';
import SubwayPathOutput from '../views/Subway-path-output.js';

export default class SubwayPathController {
	constructor() {
		this.subwayPathOutput = new SubwayPathOutput();
		this.subwayPathInput = new SubwayPathInput();

		this.handleSearchInputs();
	}

	handleSearchInputs = () => {
		this.subwayPathInput.bindSearchButton(this.setSearchInputs);
	}

	setSearchInputs = searchInputs => {
		let departureStationName;
		let arrivalStationName;
		let radioSelect;
		
		[departureStationName, arrivalStationName, radioSelect] = [...searchInputs];

		console.log(departureStationName, arrivalStationName, radioSelect);
	}
}
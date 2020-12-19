const FIRST_RADIO = 0;
const SECOND_RADIO = 1;

export default class SubwayPathInput {
	bindSearchButton = searchButtonHandler => {
		const searchButton = document.getElementById('search-button');

		searchButton.addEventListener('click', () => searchButtonHandler(this.getSearchInputs()));
	}

	getSearchInputs = () => {
		const departureStationName = this.getDepartureStationName();
		const arrivalStationName = this.getArrivalStationName();
		const radioSelect = this.getRadioSelect();

		return [departureStationName, arrivalStationName, radioSelect];
	}

	getDepartureStationName = () => {
		const departureStationNameInput = document.getElementById('departure-station-name-input');

		return departureStationNameInput.value;
	}

	getArrivalStationName = () => {
		const arrivalStationNameInput = document.getElementById('arrival-station-name-input');

		return arrivalStationNameInput.value;
	}

	getRadioSelect = () => {
		const radioSelectInput = document.getElementsByName('search-type');
		let radioSelect;
		if (radioSelectInput[FIRST_RADIO].checked) {
			radioSelect = radioSelectInput[FIRST_RADIO].value;
		} else if (radioSelectInput[SECOND_RADIO].checked) {
			radioSelect = radioSelectInput[SECOND_RADIO].value;
		}

		return radioSelect;
	}
}
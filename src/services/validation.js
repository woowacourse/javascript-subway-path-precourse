import {
	MINIMUM_STATION_NAME_LENGTH,
	MINIMUM_STATION_NAME_LENGTH_ALERT,
	SAME_STATION_ALERT,
} from './constants.js';

const includesBothStations = (connectedStations, startStation, endStation) => {
	if (connectedStations.includes(startStation) && connectedStations.includes(endStation)) {
		return true;
	}
}

export const isIncludesBothStations = (connectedStations, startStation, endStation) => {
	return includesBothStations(connectedStations, startStation, endStation);
}

const isSameDepartureNameAndArrivalName = (departureStationName, arrivalStationName) => {
	console.log(1);
	if (departureStationName === arrivalStationName) {
		alert(SAME_STATION_ALERT);
		return true;
	}
}

const isInputLengthTooShort = (departureStationName, arrivalStationName) => {
	if (departureStationName.length < MINIMUM_STATION_NAME_LENGTH ||
		arrivalStationName.length < MINIMUM_STATION_NAME_LENGTH) {
			alert(MINIMUM_STATION_NAME_LENGTH_ALERT);
			return true;
		}
}

const notValidInput = (departureStationName, arrivalStationName) => {
	if (
		isInputLengthTooShort(departureStationName, arrivalStationName) ||
		isSameDepartureNameAndArrivalName(departureStationName, arrivalStationName)
		) {
		return true;
	}
}

export const isNotValidInput = (departureStationName, arrivalStationName) => {
	return notValidInput(departureStationName, arrivalStationName);
}
import {
	MINIMUM_STATION_NAME_LENGTH,
	MINIMUM_STATION_NAME_LENGTH_ALERT,
	SAME_STATION_ALERT,
	NOT_ON_LINE_ALERT,
} from './constants.js';
import {stations} from '../data/station-data.js';

const includesBothStations = (connectedStations, startStation, endStation) => {
	if (connectedStations.includes(startStation) && connectedStations.includes(endStation)) {
		return true;
	}
}

export const isIncludesBothStations = (connectedStations, startStation, endStation) => {
	return includesBothStations(connectedStations, startStation, endStation);
}

const isNotInStations = (departureStationName, arrivalStationName) => {
	for (let station of stations) {
		if (station.name === departureStationName) {
			return;
		}
	}

	for (let station of stations) {
		if (station.name === arrivalStationName) {
			return;
		}
	}
	alert(NOT_ON_LINE_ALERT);
	return true;
}

const isSameDepartureNameAndArrivalName = (departureStationName, arrivalStationName) => {
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
		isSameDepartureNameAndArrivalName(departureStationName, arrivalStationName) ||
		isNotInStations(departureStationName, arrivalStationName)
		) {
		return true;
	}
}

export const isNotValidInput = (departureStationName, arrivalStationName) => {
	return notValidInput(departureStationName, arrivalStationName);
}
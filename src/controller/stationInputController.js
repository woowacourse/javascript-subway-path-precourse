import { errorMessage, ids } from '../keys.js';
import { stations } from '../data.js';

const isLessThanTwoLetter = (start, end) => {
	if (start.length < 2 || end.length < 2) {
		if (start.length < 2) {
			alert(errorMessage.LESS_THAN_TWO_LETTER);
			clearStartInput();
		} else if (end.length < 2) {
			alert(errorMessage.LESS_THAN_TWO_LETTER);
			clearEndInput();
		}
		return true;
	}
	return false;
};

const isSameStation = (start, end) => {
	if (start === end) {
		alert(errorMessage.SAME_START_END_POINT);
		clearStartInput();
		clearEndInput();
		return true;
	}
	return false;
};

const isExistedStation = (targetStation) => {
	for (const station of stations) {
		if (station.name === targetStation) {
			return true;
		}
	}
	alert(errorMessage.NOT_EXISTED_STATION);
	return false;
};

export const clearStartInput = () =>
	(document.getElementById(ids.STARTPOINT_INPUT_ID).value = '');

export const clearEndInput = () =>
	(document.getElementById(ids.ENDPOINT_INPUT_ID).value = '');

export const getStartPointValue = () =>
	document.getElementById(ids.STARTPOINT_INPUT_ID).value;

export const getEndPointValue = () =>
	document.getElementById(ids.ENDPOINT_INPUT_ID).value;

export const getValidInput = (start, end) => {
	if (
		!isLessThanTwoLetter(start, end) &&
		!isSameStation(start, end) &&
		isExistedStation(start) &&
		isExistedStation(end)
	) {
		return true;
	}
	clearStartInput();
	clearEndInput();
	return false;
};

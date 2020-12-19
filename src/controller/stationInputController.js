import { errorMessage, ids } from '../keys.js';
import { stations } from '../data.js';

const getStartPointValue = () =>
	document.getElementById(ids.STARTPOINT_INPUT_ID).value;

const getEndPointValue = () =>
	document.getElementById(ids.ENDPOINT_INPUT_ID).value;

const isLessThanTwoLetter = (start, end) => {
	if (start.length < 2 || end.length < 2) {
		if (start.length < 2) {
			alert(errorMessage.LESS_THAN_TWO_LETTER);
			document.getElementById(ids.STARTPOINT_INPUT_ID).value = '';
		} else if (end.length < 2) {
			alert(errorMessage.LESS_THAN_TWO_LETTER);
			document.getElementById(ids.ENDPOINT_INPUT_ID).value = '';
		}
		return true;
	}
	return false;
};

const isSameStation = (start, end) => {
	if (start === end) {
		alert(errorMessage.SAME_START_END_POINT);
		document.getElementById(ids.STARTPOINT_INPUT_ID).value = '';
		document.getElementById(ids.ENDPOINT_INPUT_ID).value = '';
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

export const getValidInput = () => {
	const [start, end] = [getStartPointValue(), getEndPointValue()];
	if (
		!isLessThanTwoLetter(start, end) &&
		!isSameStation(start, end) &&
		isExistedStation(start) &&
		isExistedStation(end)
	) {
		return [start, end];
	}
	return [-1, -1];
};

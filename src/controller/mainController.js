import { ids } from '../keys.js';

const getStartPointValue = () =>
	document.getElementById(ids.STARTPOINT_INPUT_ID).value;

const getEndPointValue = () =>
	document.getElementById(ids.ENDPOINT_INPUT_ID).value;

const getSearhType = () => {
	const radioButtons = document.getElementsByName(ids.RADIO_BUTTON_NAME);
	for (const radioButton of radioButtons) {
		if (radioButton.checked) return radioButton.value;
	}
};

export const findPathButtonHandler = () => {
	console.log(getStartPointValue());
	console.log(getEndPointValue());
	console.log(getSearhType());
};

import { ids } from '../keys.js';

export const radioButtonInit = () => {
	const radioButtons = document.getElementsByName(ids.RADIO_BUTTON_NAME);
	radioButtons[0].checked = 'checked';
};
export const getSearhType = () => {
	const radioButtons = document.getElementsByName(ids.RADIO_BUTTON_NAME);
	for (const radioButton of radioButtons) {
		if (radioButton.checked) return radioButton.value;
	}
};

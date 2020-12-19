import { appendChilds, makeElement } from '../utils/elementUtils.js';
import { ids, words, cssText } from '../keys.js';

const RadioButtonContainer = function () {
	const radioButtonContainer = makeElement({
		tag: 'div',
		style: cssText.marginCSS('bottom', 20),
	});
	const shortestPathRadioButton = makeElement({
		tag: 'input',
		type: 'radio',
		checked: 'checked',
		value: words.SHORTEST_PATH,
		name: ids.RADIO_BUTTON_NAME,
	});
	const shortestPahtText = makeElement({
		tag: 'span',
		innerText: words.SHORTEST_PATH,
	});
	const shortestTimeRadioButton = makeElement({
		tag: 'input',
		type: 'radio',
		value: words.SHORTEST_TIME,
		name: ids.RADIO_BUTTON_NAME,
	});
	const shortestTimeText = makeElement({
		tag: 'span',
		innerText: words.SHORTEST_TIME,
	});

	this.initializer = () => {
		appendChilds(radioButtonContainer, [
			shortestPathRadioButton,
			shortestPahtText,
			shortestTimeRadioButton,
			shortestTimeText,
		]);
		return radioButtonContainer;
	};
};

export default RadioButtonContainer;

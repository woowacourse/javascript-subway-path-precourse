import { ids, words } from '../keys.js';
import { appendChilds, makeElement } from '../utils/elementUtils.js';
import { findPathButtonHandler } from '../controller/mainController.js';

const StationInputContainer = function () {
	const stationInputContainer = makeElement({ tag: 'div' });
	const startPointLabel = makeElement({
		tag: 'span',
		innerText: words.START_POINT,
	});
	const startPointInput = makeElement({
		tag: 'input',
		id: ids.STARTPOINT_INPUT_ID,
	});
	const endPointLabel = makeElement({
		tag: 'span',
		innerText: words.END_POINT,
	});
	const endtPointInput = makeElement({
		tag: 'input',
		id: ids.ENDPOINT_INPUT_ID,
	});

	this.initializer = () => {
		appendChilds(stationInputContainer, [
			startPointLabel,
			startPointInput,
			endPointLabel,
			endtPointInput,
		]);
		return stationInputContainer;
	};
};

const RadioButtonContainer = function () {
	const radioButtonContainer = makeElement({ tag: 'div' });
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

const MainView = function (container) {
	const titleElement = makeElement({
		tag: 'strong',
		innerText: words.MAIN_TITLE,
	});
	const findPathButton = makeElement({
		tag: 'button',
		innerText: words.FINDPATH_BUTTON,
		id: ids.FINDPAHT_BUTTON_ID,
		clickEvent: findPathButtonHandler,
	});

	const resultTitle = makeElement({ tag: 'strong', innerText: words.RESULT });

	this.initializer = () => {
		appendChilds(container, [
			titleElement,
			new StationInputContainer().initializer(),
			new RadioButtonContainer().initializer(),
			findPathButton,
			resultTitle,
		]);
	};
};

export default MainView;

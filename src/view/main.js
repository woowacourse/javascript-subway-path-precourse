import StationInputContainer from './stationInput.js';
import RadioButtonContainer from './radioButton.js';
import ResultContainer from './resultArea.js';
import { ids, words, cssText } from '../keys.js';
import { appendChilds, makeElement } from '../utils/elementUtils.js';
import { findPathButtonHandler } from '../controller/mainController.js';

const MainView = function (container) {
	const titleElement = makeElement({
		tag: 'strong',
		innerText: words.MAIN_TITLE,
		style: cssText.fontSizeCSS(3),
	});
	const findPathButton = makeElement({
		tag: 'button',
		innerText: words.FINDPATH_BUTTON,
		id: ids.FINDPAHT_BUTTON_ID,
		clickEvent: findPathButtonHandler,
		style: cssText.marginCSS('bottom', 20),
	});

	this.initializer = () => {
		appendChilds(container, [
			titleElement,
			new StationInputContainer().initializer(),
			new RadioButtonContainer().initializer(),
			findPathButton,
			new ResultContainer().initializer(),
		]);
	};
};

export default MainView;

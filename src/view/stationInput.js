import { appendChilds, makeElement } from '../utils/elementUtils.js';
import { cssText, ids, words } from '../keys.js';

const StationInputContainer = function () {
	const stationInputContainer = makeElement({
		tag: 'div',
		style: cssText.marginCSS('top', 25),
	});
	const startPointContainer = makeElement({
		tag: 'div',
		style: cssText.marginCSS('bottom', 20),
	});
	const startPointLabel = makeElement({
		tag: 'span',
		innerText: words.START_POINT,
		style: cssText.marginCSS('right', 10),
	});
	const startPointInput = makeElement({
		tag: 'input',
		id: ids.STARTPOINT_INPUT_ID,
	});
	const endPointContainer = makeElement({
		tag: 'div',
		style: cssText.marginCSS('bottom', 20),
	});
	const endPointLabel = makeElement({
		tag: 'span',
		innerText: words.END_POINT,
		style: cssText.marginCSS('right', 10),
	});
	const endtPointInput = makeElement({
		tag: 'input',
		id: ids.ENDPOINT_INPUT_ID,
	});

	this.initializer = () => {
		appendChilds(startPointContainer, [startPointLabel, startPointInput]);
		appendChilds(endPointContainer, [endPointLabel, endtPointInput]);
		appendChilds(stationInputContainer, [
			startPointContainer,
			endPointContainer,
		]);
		return stationInputContainer;
	};
};

export default StationInputContainer;

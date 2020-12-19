import { appendChilds, makeElement } from '../utils/elementUtils.js';
import { ids, words } from '../keys.js';

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

export default StationInputContainer;

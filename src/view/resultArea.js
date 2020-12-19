import { appendChilds, makeElement } from '../utils/elementUtils.js';
import { ids, words } from '../keys.js';

const ResultContainer = function () {
	const resultContainer = makeElement({ tag: 'div' });
	const resultTitle = makeElement({ tag: 'strong', innerText: words.RESULT });
	this.initializer = () => {
		appendChilds(resultContainer, [resultTitle]);
		return resultContainer;
	};
};

export default ResultContainer;

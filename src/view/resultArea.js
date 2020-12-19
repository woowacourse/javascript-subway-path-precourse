import { appendChilds, makeElement } from '../utils/elementUtils.js';
import { cssText, words } from '../keys.js';

const ResultContainer = function () {
	const resultContainer = makeElement({ tag: 'div' });
	const resultTitle = makeElement({
		tag: 'strong',
		innerText: words.RESULT,
		style: `${cssText.marginCSS('bottom', 5)} font-size: 2em;`,
	});
	this.initializer = () => {
		appendChilds(resultContainer, [resultTitle]);
		return resultContainer;
	};
};

export default ResultContainer;

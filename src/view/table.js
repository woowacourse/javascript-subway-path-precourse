import { words } from '../keys.js';
import { appendChilds, makeElement } from '../utils/elementUtils.js';
const TableContainer = function ({ totalTime, totalDistance, totalPath }) {
	const tableContainer = makeElement({ tag: 'table' });
	const tableHead = makeElement({ tag: 'thead' });
	const tableHeadRows = [
		makeElement({ tag: 'th', innerText: words.TOTAL_DISTANCE }),
		makeElement({ tag: 'th', innerText: words.TOTAL_TIME }),
	];
	const tableBody = makeElement({ tag: 'tbody' });
	const tableBodyRows = [
		makeElement({ tag: 'tr' }),
		makeElement({ tag: 'tr' }),
	];

	this.initializer = () => {
		appendChilds(tableHead, tableHeadRows);
		appendChilds(tableBody, tableBodyRows);
		appendChilds(tableBodyRows[0], [
			makeElement({ tag: 'td', innerText: totalDistance + 'km' }),
			makeElement({ tag: 'td', innerText: totalTime + '분' }),
		]);
		appendChilds(tableBodyRows[1], [
			makeElement({ tag: 'td', innerText: totalPath.join(' ➡ ') }),
		]);
		appendChilds(tableContainer, [tableHead, tableBody]);
		return tableContainer;
	};
};

export default TableContainer;

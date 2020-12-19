import { cssText, words } from '../keys.js';
import { appendChilds, makeElement } from '../utils/elementUtils.js';
const TableContainer = function ({ totalTime, totalDistance, totalPath }) {
	const tableContainer = makeElement({
		tag: 'table',
		style: `${cssText.TABLE_BOLD} text-align: center;`,
	});
	const tableHead = makeElement({ tag: 'thead' });
	const tableHeadRows = [
		makeElement({
			tag: 'th',
			innerText: words.TOTAL_DISTANCE,
			style: cssText.TABLE_BOLD,
		}),
		makeElement({
			tag: 'th',
			innerText: words.TOTAL_TIME,
			style: cssText.TABLE_BOLD,
		}),
	];
	const tableBody = makeElement({ tag: 'tbody' });
	const tableBodyRows = [
		makeElement({ tag: 'tr', style: cssText.TABLE_BOLD }),
		makeElement({ tag: 'tr', style: cssText.TABLE_BOLD }),
	];
	const tdDistance = makeElement({
		tag: 'td',
		innerText: totalDistance + 'km',
		style: cssText.TABLE_BOLD,
	});
	const tdTime = makeElement({
		tag: 'td',
		innerText: totalTime + '분',
		style: cssText.TABLE_BOLD,
	});
	const tdPath = makeElement({
		tag: 'td',
		innerText: totalPath.join(' ➡ '),
		style: cssText.TABLE_BOLD,
	});
	this.initializer = () => {
		appendChilds(tableHead, tableHeadRows);
		appendChilds(tableBody, tableBodyRows);
		appendChilds(tableBodyRows[0], [tdDistance, tdTime]);
		tdPath.setAttribute('colspan', '2');
		appendChilds(tableBodyRows[1], [tdPath]);
		appendChilds(tableContainer, [tableHead, tableBody]);
		return tableContainer;
	};
};

export default TableContainer;

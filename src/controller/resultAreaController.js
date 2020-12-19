export const clearResultTable = () => {
	const tableContainer = document.querySelector('button + div > table');
	const tableTitle = document.querySelector('button + div > p');
	if (tableContainer) {
		tableContainer.remove();
		tableTitle.remove();
	}
};
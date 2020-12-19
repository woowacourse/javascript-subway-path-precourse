import CommonView from './common_view.js';
import CommonUtils from './common_utils.js';

export default class TableAddView {
  constructor() {
    this._commonView = new CommonView();
    this._commonUtils = new CommonUtils();
  }

  setBorderStyle(element) {
    element.style.border = '1px solid black';
  }

  createAndReturnRow(rowArray, tableIdName) {
    const table = this._commonUtils.getById(tableIdName);
    const row = this.addRowToTable(table, rowArray);

    this.addCellsToRow(rowArray, row, tableIdName);

    return row;
  }

  addRowToTable(table, rowArray) {
    const row = table.insertRow();

    this._commonUtils.setAttribute(row, 'data-tracking', rowArray);

    return row;
  }

  addCellsToRow(rowArray, row, tableIdName) {
    rowArray.forEach((v, i) => {
      const cell = row.insertCell(i);

      this.setBorderStyle(cell);
    });
  }
}

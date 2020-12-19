import CommonView from './common_view.js';
import CommonUtils from './common_utils.js';
import { tableType } from '../consts.js';
import TableAddView from './table_add_view.js';

export default class TableUtils {
  constructor() {
    this._commonView = new CommonView();
    this._commonUtils = new CommonUtils();
    this._tableAddView = new TableAddView();
  }

  createTableDefaults(tableIdName, parentIdName) {
    const rowTitleArray = tableType[tableIdName];
    const table = document.createElement('table');

    this._tableAddView.setBorderStyle(table);
    this.createTitleRow(rowTitleArray, table);
    this._commonUtils.setAttribute(table, 'id', tableIdName);
    this._commonUtils.appendToIdName(table, parentIdName);
  }

  createTitleRow(rowTitleArray, table) {
    const row = table.insertRow(0);

    rowTitleArray.forEach((titleText, i) => {
      this.createTitleCell(row, titleText, i);
    });
  }

  createTitleCell(row, titleText, i) {
    const cell = row.insertCell(i);

    cell.innerHTML = titleText;
    this.setTitleCellStyle(cell);
  }

  setTitleCellStyle(cell) {
    this._tableAddView.setBorderStyle(cell);
    cell.style.fontWeight = 'bold';
    cell.style.textAlign = 'center';
  }
}

export default class Table {
  constructor({ target }) {
    this.target = target;

    this.table = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    target.appendChild(this.table);
    this.table.appendChild(this.thead);
    this.table.appendChild(this.tbody);
  }

  createTableHeader(headers) {
    this.thead.innerHTML = `
      <tr>
        ${headers.map((header, index) => `
          <th data-index="${index}">${header}</th>
        `).join('')}
      </tr>
    `;
  }

  renderTable({ data, callbackRender, onClickDelete, className }) {
    if (data.length === 0) {
      this.tbody.innerHTML = '';
      return;
    }
    this.tbody.innerHTML = data.map(callbackRender).join('');

    if (onClickDelete) {
      const deleteButtons = this.tbody.querySelectorAll(className);
      deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => onClickDelete(data[index]));
      });
    }
  }
}
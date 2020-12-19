import View from "./View.js";

export default class ResultTable extends View {
  constructor() {
    super();
  }

  setup(el) {
    this.init(el);
    return this;
  }

  render(result, header) {
    const tableContainer = document.createElement("div");
    tableContainer.innerHTML = `
        <h2>📃 결과</h2>
            <h4>${header}</h4>
            <table>
            <thead>
                <th>총 거리</th>
                <th>총 소요시간</th>
            </thead>
            <tbody>
                <tr>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td colspan='2'>${this.resultListHTML(result)}</td>
                </tr>
            </tbody>
        </table>
    `;

    this.el.append(tableContainer);
  }

  resultListHTML(result) {
    return `${result.join("▶︎")}`;
  }

  //   clear() {
  //     while (this._app.children.length > 2) {
  //       this._app.children[this._app.children.length - 1].remove();
  //     }
  //   }
}

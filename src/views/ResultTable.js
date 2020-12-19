import View from "./View.js";

export default class ResultTable extends View {
  constructor() {
    super();
  }

  setup(el) {
    this.init(el);
    return this;
  }

  render() {
    const tableContainer = document.createElement("div");
    tableContainer.innerHTML = `
        <h2>📃 결과</h2>
            <h4>최단 거리--</h4>
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
                <td></td>
                </tr>
            </tbody>
        </table>
    `;

    this.el.append(tableContainer);
  }
}

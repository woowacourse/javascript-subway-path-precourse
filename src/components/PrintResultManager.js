class PrintResultManager {
  constructor($resultContainer, getLines, getLineResult) {
    this.$resultContainer = $resultContainer;
    this.getLines = getLines;
    this.getLineResult = getLineResult;
  }

  printLines = () => {
    const lineResultText = this.lineResult.join("➡");
    this.$resultContainer.innerHTML += `
      <tr>
        <td>${lineResultText}</td>
      </tr>
    `;
  };

  render = () => {
    this.lines = this.getLines();
    this.lineResult = this.getLineResult();

    this.printLines();
  };
}

export default PrintResultManager;

class PrintResultManager {
  constructor(getLines, getLineResult) {
    this.getLines = getLines;
    this.getLineResult = getLineResult;
  }

  render = () => {
    this.lines = this.getLines();
    this.lineResult = this.getLineResult();
  };
}

export default PrintResultManager;

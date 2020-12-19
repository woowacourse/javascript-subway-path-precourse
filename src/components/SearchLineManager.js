class SearchLineManager {
  constructor(getState, getLines) {
    this.getState = getState;
    this.getLines = getLines;
  }

  render = () => {
    this.userState = this.getState();
    this.lines = this.getLines();
  };
}

export default SearchLineManager;

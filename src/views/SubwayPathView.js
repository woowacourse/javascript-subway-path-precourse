class SubwayPathView {
  constructor() {
    this.handleButtonClick();
  }

  getSearchPathInput = () => {
    const departure = document.getElementById("departure-station-name-input")
      .value;
    const arrival = document.getElementById("arrival-station-name-input").value;
    const option = document.querySelector("input[name='search-type']:checked")
      .value;

    return { departure, arrival, option };
  };

  manageSearchPath = () => {
    const { departure, arrival, option } = this.getSearchPathInput();
    if (checkVaild(departure, arrival)) {
      const path = searchPath(departure, arrival, option);
      renderResult(path, countPathLength(path), countPathTime(path));
    }
  };

  handleButtonClick = () => {
    const searchBtn = document.getElementById("search-button");
    searchBtn.addEventListener("click", this.manageSearchPath);
  };
}

export default SubwayPathView;

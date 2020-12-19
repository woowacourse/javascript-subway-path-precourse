class SubwayPathView {
  constructor() {
    this.handleButtonClick();
  }

  handleButtonClick = () => {
    const searchBtn = document.getElementById("search-button");
    searchBtn.addEventListener("click", this.manageSearchPath);
  };
}

export default SubwayPathView;

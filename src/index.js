export default class SubwayManager {
  constructor() {
    this.initEvent();
  }

  getStationsToFindPath() {
    const departure = document.getElementById("departure-station-name-input")
      .value;
    const arrival = document.getElementById("arrival-station-name-input").value;
    console.log(departure, arrival);
  }

  initEvent() {
    document.getElementById("search-button").addEventListener("click", () => {
      this.getStationsToFindPath();
    });
  }
}

new SubwayManager();

export default function PathInput({ findRoute }) {
  this.template = () => {
    return `<div>
      ${this.departureStationNameInputTemplate()}
      ${this.arrivalStationNameInputTemplate()}
      ${this.searchTypeRadioTemplate()}
      ${this.serachButtonTemplate()}
    </div>`;
  };

  this.searchEvent = ({ target: { id } }) => {
    if (id !== 'search-button') {
      return;
    }

    const departureStationName = document.getElementById(
      'departure-station-name-input'
    ).value;
    const arrivalStationName = document.getElementById(
      'arrival-station-name-input'
    ).value;
    const radioButtons = document.getElementsByName('search-type');
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        findRoute(
          departureStationName,
          arrivalStationName,
          radioButton.labels[0].textContent
        );
      }
    }
  };

  this.departureStationNameInputTemplate = () => {
    return `<div>
      <label for="departure-station-name-input">출발역</label>
      <input id="departure-station-name-input">
    </div>`;
  };

  this.arrivalStationNameInputTemplate = () => {
    return `<div>
    <label for="arrival-station-name-input">도착역</label>
    <input id="arrival-station-name-input">
  </div>`;
  };

  this.searchTypeRadioTemplate = () => {
    return `<div>
      <input type="radio" id="short-distance-input" name="search-type" checked>
      <label for="short-distance-input">최단거리</label>
      <input type="radio" id="short-time-input" name="search-type">
      <label for="short-time-input">최소시간</label>
    </div>`;
  };

  this.serachButtonTemplate = () => {
    return `<button id="search-button">길 찾기</button>`;
  };
}

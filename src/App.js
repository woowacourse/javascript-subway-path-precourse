export default class App {
  constructor(target) {
    this.target = target;
    this.createHeader(target);
    this.createStationInput(target);
  }

  createHeader(target) {
    const header = document.createElement('header');
    header.innerHTML = `<h1>🚇 지하철 길찾기</h1>`;
    target.appendChild(header);
  }

  createStationInput(target) {
    const container = document.createElement('div');
    target.appendChild(container);
    container.className = 'station-input';

    container.innerHTML = `
      <div>
        <label for="departure">출발역</label>
        <input
          type="text"
          name="departure"
          id="departure-station-name-input"
        />
      </div>
      <div>
        <label for="arrival">도착역</label>
        <input
          type="text"
          name="arrival"
          id="arrival-station-name-input"
        />
      </div>
    `;
  }
}
export default class App {
  constructor(target) {
    this.target = target;
    this.createHeader(target);
  }

  createHeader(target) {
    const header = document.createElement('header');
    header.innerHTML = `<h1>🚇 지하철 길찾기</h1>`;
    target.appendChild(header);
  }
}
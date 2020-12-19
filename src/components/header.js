export default function Header() {
  this.headerContainer = document.querySelector('.header-container');

  this.template = () => {
    return `<h1>🚇지하철 길찾기</h1>`;
  };

  this.render = () => {
    this.headerContainer.innerHTML = this.template();
  };

  this.render();
}

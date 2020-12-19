import { PathInput } from './components/index.js';

export default function SubwayPath() {
  this.app = document.getElementById('app');
  this.pathInput = {};

  this.render = () => {
    this.app.innerHTML = this.pathInput.template();
  };

  this.findRoute = () => {};

  this.delegateEvent = ({ target }) => {
    this.pathInput.searchEvent({ target });
  };

  this.handleClickApp = ({ target }) => {
    this.delegateEvent({ target });
  };

  this.pathInput = new PathInput({ findRoute: this.findRoute });
  this.render();
  this.app.addEventListener('click', this.handleClickApp);
}

new SubwayPath();

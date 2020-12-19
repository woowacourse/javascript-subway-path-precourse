import { PathInput } from './components/index.js';

export default function SubwayPath() {
  this.app = document.getElementById('app');
  this.pathInput = {};

  this.render = () => {
    this.app.innerHTML = this.pathInput.template();
  };

  this.pathInput = new PathInput();
  this.render();
}

new SubwayPath();

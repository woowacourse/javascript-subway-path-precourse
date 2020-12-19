import { stations, lines, sections } from "../data/index.js";

class App {
  constructor($target) {
    this.$target = $target;

    this.mountDOMs();
    this.mountComponents();
    console.log(this);
  }

  initState() {
    this.stations = stations;
    this.lines = lines;
    this.sections = sections;
  }

  mountDOMs() {
    this.$inputContainer = this.$target.querySelector(`#input-container`);
    this.$resultContainer = this.$target.querySelector(`#result-container`);
  }
  mountComponents() {}
}

export default App;

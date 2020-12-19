import SubwayInput from "./SubwayInput.js";
import SubwayResult from "./SubwayResult.js";
import { stations, lines, sections } from "../data/index.js";

class App {
  constructor($target) {
    this.$target = $target;

    this.initState();
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
  mountComponents() {
    new SubwayInput(this.$inputContainer, {
      stations: this.stations,
      lines: this.lines,
      sections: this.sections,
    });

    new SubwayResult(this.$resultContainer, {
      stations: this.stations,
      lines: this.lines,
      sections: this.sections,
    });
  }
}

export default App;

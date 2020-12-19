import SubwayInput from "./SubwayInput.js";
import SubwayResult from "./SubwayResult.js";
import { stations } from "../data/index.js";
import { minDistanceStore, minTimeStore } from "../data/subwayStore.js";

class App {
  constructor($target) {
    this.$target = $target;

    this.initState();
    this.mountDOMs();
    this.mountComponents();
  }

  initState() {
    this.stations = stations;
    this.minDistanceStore = minDistanceStore;
    this.minTimeStore = minTimeStore;
  }

  mountDOMs() {
    this.$inputContainer = this.$target.querySelector(`#input-container`);
    this.$resultContainer = this.$target.querySelector(`#result-container`);
  }

  mountComponents() {
    new SubwayInput(this.$inputContainer, {
      stations: this.stations,
      minDistanceStore: this.minDistanceStore,
      minTimeStore: this.minTimeStore,
    });

    new SubwayResult(this.$resultContainer, {
      stations: this.stations,
      lines: this.lines,
      sections: this.sections,
    });
  }
}

export default App;

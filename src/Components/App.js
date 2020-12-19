import SubwayInput from "./SubwayInput.js";
import SubwayResult from "./SubwayResult.js";
import { stations, sections } from "../data/index.js";
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
    this.sections = sections;
    this.minDistanceStore = minDistanceStore;
    this.minTimeStore = minTimeStore;
  }

  mountDOMs() {
    this.$inputContainer = this.$target.querySelector(`#input-container`);
    this.$resultContainer = this.$target.querySelector(`#result-container`);
  }

  mountComponents() {
    new SubwayInput(this.$inputContainer, {
      stations: this.stations.map(station => station.name),
      sections: this.sections,
      minDistanceStore: this.minDistanceStore,
      minTimeStore: this.minTimeStore,
      getTotalInfo: this.getTotalInfo,
    });

    new SubwayResult(this.$resultContainer, {
      sections: this.sections,
    });
  }

  getTotalInfo(sections, path) {
    let totalTime = 0;
    let totalDistance = 0;

    for (let i = 0; i < path.length - 1; i++) {
      const _departure = path[i];
      const _arrival = path[i + 1];

      const section = sections.find(
        ({ departure, arrival }) =>
          departure === _departure && arrival === _arrival,
      );

      totalTime += section.time;
      totalDistance += section.distance;
    }

    return { totalTime, totalDistance, path };
  }
}

export default App;

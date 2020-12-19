import { INPUT, SEARCH, SEARCH_TYPE } from "./constants.js";
import { minPath } from "./getMinimum.js";
import { appendDataToTable, changeTypeTitle, display } from "./display.js";
import { lines } from "./data.js";
import { createDistanceMessage, createResultPathMessage, createTimeMessage } from "./createMessages.js";
import { totalBetweenStations } from "./getTotal.js";

export default function App() {
  this.data = lines;

  SEARCH.BUTTON.addEventListener("click", (e) => {
    let type;
    display();
    if (SEARCH.TYPE[0].checked == true) {
      type = SEARCH.TYPE[0];
      changeTypeTitle(SEARCH_TYPE.PATH);
    }
    if (SEARCH.TYPE[1].checked == true) {
      type = SEARCH.TYPE[1];
      changeTypeTitle(SEARCH_TYPE.TIME);
    }
    this.path = minPath(this.data, INPUT.DEPARTURE.value, INPUT.ARRIVAL.value, type.value);
    // console.log(this.data, INPUT.DEPARTURE.value, INPUT.ARRIVAL.value, type.value);
    console.log(createDistanceMessage(totalBetweenStations(this.data, this.path, "distance")));
    console.log(createTimeMessage(totalBetweenStations(this.data, this.path, "time")));
    console.log(createResultPathMessage(this.path));
    appendDataToTable(createDistanceMessage(totalBetweenStations(this.data, this.path, "distance")),createTimeMessage(totalBetweenStations(this.data, this.path, "time")),createResultPathMessage(this.path));
});
}

new App();

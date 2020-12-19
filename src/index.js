import { INPUT, SEARCH, SEARCH_TYPE } from "./constants.js";
import { minPath } from "./getMinimum.js";
import { display,appendDistanceToTable,appendPathToTable,appendTimeToTable } from "./display.js";
import { lines } from "./data.js";
import { createDistanceMessage, createResultPathMessage, createTimeMessage } from "./createMessages.js";
import { totalBetweenStations } from "./getTotal.js";

export default function App() {
  this.data = lines;
  SEARCH.BUTTON.addEventListener("click", (e) => {
    display();
    this.type = changeType();
    this.path = minPath(this.data, INPUT.DEPARTURE.value, INPUT.ARRIVAL.value, this.type.value);
    appendDistanceToTable(createDistanceMessage(totalBetweenStations(this.data, this.path, "distance")));
    appendTimeToTable(createTimeMessage(totalBetweenStations(this.data, this.path, "time")));
    appendPathToTable(createResultPathMessage(this.path));
});
}

function changeType() {
  let type;
  if (SEARCH.TYPE[0].checked == true) {
    type = SEARCH.TYPE[0];
  }
  if (SEARCH.TYPE[1].checked == true) {
    type = SEARCH.TYPE[1];
  }
  return type;
}

new App();

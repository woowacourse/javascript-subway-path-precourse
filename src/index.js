import { INPUT, SEARCH, SEARCH_TYPE } from "./constants.js";
import { minPath } from "./getMinimum.js";
import { changeTypeTitle, display } from "./printResult.js";
import { lines } from "./data.js";

export default function App() {
  this.data = lines;

  SEARCH.BUTTON.addEventListener("click", (e) => {
    display();
    if (SEARCH.TYPE[0].checked == true) {
      // 최단거리
      changeTypeTitle(SEARCH_TYPE.PATH);
    }
    if (SEARCH.TYPE[1].checked == true) {
      // 최소시간
      changeTypeTitle(SEARCH_TYPE.TIME);
    }
    this.path = minPath(INPUT.DEPARTURE, INPUT.ARRIVAL, SEARCH_TYPE.value);
    console.log(this);  
});
  
// console.log(this);
// console.log(this.data);
}

new App();


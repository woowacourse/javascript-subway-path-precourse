import FindRoadEvent from "./events/FindRoadEvent.js";

export default function SubwayNavigation() {
  const inputButton = document.getElementById("station-input-button");
  inputButton.addEventListener("click", (event) => FindRoadEvent(event));
}

new SubwayNavigation();

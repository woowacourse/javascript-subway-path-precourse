import { printLayout } from "./path-finder/templates.js";
import { init } from "./path-finder/actions.js";

const pathFinderInputBtn = document.getElementById("path-finder-input-button");

export default function SubwayPath() {
  pathFinderInputBtn.addEventListener("click", () => {
    init();
  });
}

new SubwayPath();

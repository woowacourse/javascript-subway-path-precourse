import { printLayout } from "./path-finder/templates.js";
import { getPathFinderInput } from "./path-finder/actions.js";

const pathFinderInputBtn = document.getElementById("path-finder-input-button");

export default function SubwayPath() {
  pathFinderInputBtn.addEventListener("click", () => {
    console.log(getPathFinderInput());
  });
}

new SubwayPath();

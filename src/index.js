import { printLayout } from "./path-finder/templates.js";

const pathFinderInputBtn = document.getElementById("path-finder-input-button");

export default function SubwayPath() {
  const dummy = [
    "최단거리",
    "4",
    "5",
    ["교대", "강남", "양재", "양재시간의숲"],
  ];

  pathFinderInputBtn.addEventListener("click", () => {
    printLayout(...dummy);
  });
}

new SubwayPath();

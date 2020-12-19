import findPath from "./components/find-path.js";
import { makeStringToHTML } from "./utils/display/display-utils.js";

const app = document.getElementById("app");

function subwayPath() {
  findPath();
}

new subwayPath();

// 첫 화면 그리기

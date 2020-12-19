import { dispatchReRender } from "./utils/events.js";
import FindRoute from "./FindRoute/FindRoute.js";

const app = document.querySelector("#app");
const findRoute = new FindRoute();

function reRender() {
  app.innerHTML = findRoute.render();
  findRoute.mount();
}

window.addEventListener("changeState", reRender);
dispatchReRender();

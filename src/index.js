import Controller from "./Controller.js";
import Model from "./Model.js";
import View from "./View.js";

window.addEventListener("load", () => new Controller(new Model(), new View()));

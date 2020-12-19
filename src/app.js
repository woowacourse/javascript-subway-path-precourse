import MainController from "./controllers/MainController.js";

class App {
  constructor() {
    this.tag = "[App]";
    this.MainController = new MainController();
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.MainController.init();
    });
  }
}

new App();

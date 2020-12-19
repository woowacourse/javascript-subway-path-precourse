import GetUserInput from "./GetUserInput.js";

export default class StationPathController {
  constructor () {

  }

  eventHandler() {
    document.addEventListener('click', (event) => {
      const id = event.target.id;
      if (id === 'search-button') {
        this.searchButtonClick();
      }
    })
  }

  searchButtonClick() {
    const userInput = new GetUserInput();
    if (userInput.isValid() !== 1) {
      alert(userInput.isValid())
    }
    alert("valid Input, next calculate it");
  }
}
export default class Controller {
  constructor(view, models) {
    this._view = view;
    this._models = models;
  }
  getInputValueByID(id) {
    const input = document.getElementById(id);
    return input.value.trim();
  }
  getSelectedRadioOptionByName(name) {
    const radioOptions = document.getElementsByName(name);
    let selectedOption;
    for (let radioOption of radioOptions) {
      if (radioOption.checked == true) {
        selectedOption = radioOption.value;
        break;
      }
    }
    return selectedOption;
  }

  addClickEventByID(id, event) {
    const button = document.getElementById(id);
    button.addEventListener("click", event.bind(this));
  }
}

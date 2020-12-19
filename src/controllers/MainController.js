import SearchPathInputForm from '../views/SearchPathInputForm.js';

const tag = `[MainController]`;
export default class MainController {
  init() {
    console.log(`${tag} init`);
    new SearchPathInputForm()
      .setup(document.querySelector('#input-search-station-container'))
      .on('submitSearchInputValue', (e) => this.onSubmitSearchInputHandler(e.detail));
  }
}

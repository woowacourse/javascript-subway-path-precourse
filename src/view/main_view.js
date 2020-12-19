import CommonView from './common_view.js';
import {inputConsts} from '../utils/consts.js';
import CommonUtils from './common_utils.js';

export default class MainView {
  constructor() {
    this._commonView = new CommonView();
    this._commonUtils = new CommonUtils();
    this.initPage();
  }

  initPage() {
    document.body.style.fontFamily = 'Arial';
    this.createMainTitle();
    this.createInputArea();
    this.createRadioArea();
    this.createButtonArea();
  }

  createMainTitle() {
    const app = this._commonUtils.getById(inputConsts.MAIN_IDNAME);

    app.innerHTML = inputConsts.MAIN_TITLE_TEXT;
  }

  createInputArea() {
    this._commonView.createDiv(inputConsts.INPUT_AREA_IDNAME);
    this.createDepartureInput();
    this._commonView.insertEmptyLine(inputConsts.INPUT_AREA_IDNAME);
    this.createArrivalInput();
    this._commonView.insertEmptyLine(inputConsts.INPUT_AREA_IDNAME);
  }

  createArrivalInput() {
    this._commonView.createTitle(inputConsts.INPUT_TITLE_TAG,
      inputConsts.ARRIVAL_TITLE_CONTENT, inputConsts.ARRIVAL_INPUT_IDNAME,
      inputConsts.INPUT_AREA_IDNAME);
    this._commonView.createInput(inputConsts.ARRIVAL_INPUT_IDNAME,
      inputConsts.INPUT_AREA_IDNAME);
    this._commonView.insertEmptyLine(inputConsts.INPUT_AREA_IDNAME);
  }

  createDepartureInput() {
    this._commonView.createTitle(inputConsts.INPUT_TITLE_TAG,
      inputConsts.DEPARTURE_TITLE_CONTENT, inputConsts.DEPARTURE_INPUT_IDNAME,
      inputConsts.INPUT_AREA_IDNAME);
    this._commonView.createInput(inputConsts.DEPARTURE_INPUT_IDNAME,
      inputConsts.INPUT_AREA_IDNAME);
    this._commonView.insertEmptyLine(inputConsts.INPUT_AREA_IDNAME);
  }

  createRadioArea() {
    this._commonView.createDiv(inputConsts.RADIO_AREA_IDNAME);
    this._commonView.createInput(inputConsts.RADIO_DISTANCE_IDNAME, inputConsts.RADIO_AREA_IDNAME, inputConsts.RADIO_DISTANCE_TEXT);
    this._commonView.createTitle(inputConsts.INPUT_TITLE_TAG, inputConsts.RADIO_DISTANCE_TEXT, '', inputConsts.RADIO_AREA_IDNAME, inputConsts.RADIO_MARGIN);
    this._commonView.createInput(inputConsts.RADIO_TIME_IDNAME, inputConsts.RADIO_AREA_IDNAME, inputConsts.RADIO_TIME_TEXT);
    this._commonView.createTitle(inputConsts.INPUT_TITLE_TAG, inputConsts.RADIO_TIME_TEXT, '', inputConsts.RADIO_AREA_IDNAME, inputConsts.RADIO_MARGIN);
  }

  createButtonArea() {
    this._commonView.insertEmptyLine(inputConsts.MAIN_IDNAME);
    this._commonView.createButton(inputConsts.SEARCH_BUTTON_IDNAME, inputConsts.SEARCH_BUTTON_TEXT, inputConsts.MAIN_IDNAME);
  }
}
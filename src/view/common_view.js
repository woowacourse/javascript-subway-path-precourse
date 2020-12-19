import {inputConsts} from '../utils/consts.js';
import CommonUtils from './common_utils.js';

export default class CommonView {
  constructor() {
    this._commonUtils = new CommonUtils();
  }

  createDOM(tag) {
    return document.createElement(tag);
  }

  insertEmptyLine(parentIdName) {
    const br = this.createElement("br");

    this._commonUtils.appendToIdName(br, parentIdName);
  }

  createTitle(tag, titleText, titleIdName, parentIdName, margin) {
    const title = this.createElement(tag);

    title.innerHTML = titleText;
    this._commonUtils.setAttribute(title, "id", titleIdName);
    this._commonUtils.appendToIdName(title, parentIdName);

    if (margin) {
      this._commonUtils.setMargin(title, margin)
    }
  }

  createInput(inputIdName, parentIdName, radio) {
    const input = this.createElement("input");

    this._commonUtils.setAttribute(input, "id", inputIdName);
    this._commonUtils.appendToIdName(input, parentIdName);
    this._commonUtils.setMargin(input, inputConsts.RADIO_MARGIN);

    if (radio) {
      this._commonUtils.setAttribute(input, inputConsts.RADIO_ATTRIBUTE, inputConsts.RADIO_ATTRIBUTE_NAME);
      this._commonUtils.setAttribute(input, 'name', inputConsts.RADIO_NAME);
    }

    return input;
  }

  createButton(buttonAttributeName, buttonText, parentIdName) {
    const button = this.createElement("button");

    this._commonUtils.setAttribute(button, "id", buttonAttributeName);
    button.innerHTML = buttonText;
    this._commonUtils.appendToIdName(button, parentIdName);
    this._commonUtils.setMargin(button, inputConsts.BUTTON_MARGIN);

    return button;
  }

  createElement(tag) {
    return document.createElement(tag);
  }

  createDiv(attributeName) {
    const div = this.createElement('div');

    this._commonUtils.setAttribute(div, 'id', attributeName);
    this._commonUtils.appendToIdName(div, inputConsts.MAIN_IDNAME);
  }

  alertError = (errorMessage) => {
    alert(errorMessage);
  };
}
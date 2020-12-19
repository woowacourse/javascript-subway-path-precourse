import {INPUT, RADIO, BUTTON} from '../constants.js';

class InputComponent {
  inputTemplate() {
    return `
      출발역 <input id=${INPUT.START.ID}></input><br><br>
      도착역 <input id=${INPUT.END.ID}></input><br><br>
      <input type="radio" name=${RADIO.NAME} value="최단거리" checked="true">최단거리
      <input type="radio" name=${RADIO.NAME} value="최소시간">최소시간
      <br><br>
      <button id=${BUTTON.ID} value="길 찾기">길 찾기</button>
    `;
  }
}

const inputComponent = new InputComponent();

export const {inputTemplate} = inputComponent;

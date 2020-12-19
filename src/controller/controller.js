import { stations } from '../model/data.js';
import Model from '../model/model.js';
import CustomError from '../utils/customError.js';
import MainLayout from '../view/mainLayout.js';

export default class Controller {
  constructor() {
    this.view = new MainLayout(this);
    this.model = new Model();
  }

  /**
   * view가 사용하는 메소드
   */
  getInputFromUser(id, name) {
    const { value } = this.view.rendered.querySelector(id);
    if(!value) {
      throw new CustomError(`${name}역을 입력해주세요`);
    }
    if (!this.model.includeStation(value)) {
      throw new CustomError(`${name}역이 존재하지 않습니다`);
    }
    return value;
  }

  getDepartmentInput() {
    return this.getInputFromUser('#departure-station-name-input', '출발');
  }

  getArrivalInput() {
    return this.getInputFromUser('#arrival-station-name-input', '도착');
  }
}

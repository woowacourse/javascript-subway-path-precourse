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
  getValueOfId(id, name) {
    const { value } = this.view.rendered.querySelector(id);
    if (!value) {
      throw new CustomError(`${name}역을 입력해주세요`);
    }
    if (!this.model.includeStation(value)) {
      throw new CustomError(`${name}역이 존재하지 않습니다`);
    }
    return value;
  }

  getInputFromUser() {
    const depart = this.getDepartmentInput();
    const arrive = this.getArrivalInput();
    if (depart === arrive) {
      throw new CustomError('출발역과 도착역은 달라야 합니다');
    }

    return [depart, arrive];
  }

  getDepartmentInput() {
    return this.getValueOfId('#departure-station-name-input', '출발');
  }

  getArrivalInput() {
    return this.getValueOfId('#arrival-station-name-input', '도착');
  }

  getShortestPath(depart, arrive) {
    // TODO: 버튼따라서 리턴하기
    return this.model.getShortestPathByDistance(depart, arrive);
  }
}

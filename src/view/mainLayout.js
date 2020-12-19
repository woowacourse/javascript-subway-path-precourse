import CustomError from '../utils/customError.js';
import Render from './render.js';

export default class MainLayout {
  constructor(controller) {
    this.controller = controller;
    this.elements = this.createAllElements();
    this.rendered = Render.$render(this.elements.root);
  }

  createAllElements() {
    // override
    const elements = {
      root: {
        $el: this.createRoot(),
        $children: {
          title: {
            $el: this.createTitle('h1', '🚇지하철 길찾기'),
            $children: {},
          },
          inputContainer: this.$createInputContainer(),
          resultContainer: this.$createResultContainer(),
        },
      },
    };

    return elements;
  }

  /**
   * 화면에 보여지는 엘리먼트들을 만드는 함수 모음
   */
  createTitle(tag, text) {
    return Render.createElement({
      tag,
      innerHTML: text,
    });
  }

  createRoot() {
    return Render.createElement({
      tag: 'main',
      id: 'root',
    });
  }

  $createInputContainer() {
    const container = Render.createElement({ tag: 'div' });
    const department = this.$createStationInputContainer(
      '출발역',
      'departure-station-name-input',
    );
    const arrival = this.$createStationInputContainer(
      '도착역',
      'arrival-station-name-input',
    );

    const distance = this.createRadio('distance', 'search-type', true);
    const distanceLabel = this.craeteLabel('최단거리', 'radio-distance');
    const time = this.createRadio('time', 'search-type');
    const timeLabel = this.craeteLabel('최단시간', 'radio-time');
    const button = this.createButton();
    return Render.$createElementNode(container, {
      department,
      arrival,
      distance: Render.$createElementNode(distance),
      distanceLabel: Render.$createElementNode(distanceLabel),
      time: Render.$createElementNode(time),
      timeLabel: Render.$createElementNode(timeLabel),
      button: Render.$createElementNode(button),
    });
  }

  $createStationInputContainer(text, id) {
    const container = Render.createElement({ tag: 'div' });
    const title = Render.createElement({ tag: 'h3', innerHTML: text });
    const input = Render.createElement({ tag: 'input', id });
    return Render.$createElementNode(container, {
      title: Render.$createElementNode(title),
      input: Render.$createElementNode(input),
    });
  }

  createRadio(value, name, check = false) {
    const node = Render.createElement({
      tag: 'input',
      type: 'radio',
      id: `radio-${value}`,
      name: name,
      value: value,
    });

    if (check) {
      node.checked = 'checked';
    }
    return node;
  }

  craeteLabel(text, radioId) {
    return Render.createElement({
      tag: 'label',
      for: radioId,
      innerHTML: text,
    });
  }

  createButton() {
    return Render.createElement({
      tag: 'button',
      id: 'search-button',
      innerHTML: '길 찾기',
      eventListener: { click: [() => this.handleInputButton()] },
    });
  }

  $createResultContainer() {
    const container = Render.createElement({ tag: 'div' });
    const title = Render.createElement({ tag: 'h2', innerHTML: '📝결과' });
    const searchType = Render.createElement({ tag: 'h3', innerHTML: '임시' });
    const table = this.createResultTable();

    return Render.$createElementNode(container, {
      title: Render.$createElementNode(title),
      searchType: Render.$createElementNode(searchType),
      table: Render.$createElementNode(table),
    });
  }

  createResultTable() {
    return Render.createElement({
      tag: 'table',
      innerHTML: `<thead><tr><th>총 거리</th><th>총 소요시간</th></tr></thead><tbody></tbody>`,
    });
  }

  createTableTemplate() {
    return this.createElement({
      tag: 'template',
      id: 'table-row',
      innerHTML: '<tr><td></td><td></td></tr><tr><td colspan="2"></td></tr>',
    });
  }

  /**
   * 이벤트 핸들러
   */
  handleInputButton() {
    try {
      const [depart, arrive] = this.controller.getInputFromUser();
      const searchType = this.controller.getCheckedSearchType();
      const result = this.controller.getShortestPath(
        depart,
        arrive,
        searchType,
      );

      console.log(result);
      console.log(`${depart}, ${arrive}`);
    } catch (error) {
      console.log(error);
      // error.alertUser();
    }
  }
}

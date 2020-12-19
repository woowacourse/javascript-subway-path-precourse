import MainView from '../view/main_view.js';
import Dijkstra from '../utils/Dijkstra.js';
import CommonUtils from '../view/common_utils.js';
import { inputConsts } from '../utils/consts.js';
import ErrorUtils from '../utils/error_utils.js';
import CommonView from '../view/common_view.js';

export default class MainController {
  constructor() {
    new MainView();
    this.setVariables();
    this.addEventToButton();
    // const dijkstra = new Dijkstra();
    
    // dijkstra.addEdge('교대', '강남', 2);
    // dijkstra.addEdge('강남', '양재', 2);
    // dijkstra.addEdge('양재', '양재시민의숲', 10);

    // dijkstra.addEdge('교대', '남부터미널', 3);
    // dijkstra.addEdge('남부터미널', '양재', 6);

    // const result = dijkstra.findShortestPath('교대', '양재시민의숲');

    // dijkstra.addEdge('교대', '강남', 3);
    // dijkstra.addEdge('강남', '양재', 8);
    // dijkstra.addEdge('양재', '양재시민의숲', 3);

    // dijkstra.addEdge('교대', '남부터미널', 2);
    // dijkstra.addEdge('남부터미널', '양재', 5);

    // const result = dijkstra.findShortestPath('교대', '양재시민의숲');

    // console.log(result);
  }

  setVariables() {
    this._commonView = new CommonView();
    this._commonUtils = new CommonUtils();
    this._errorUtils = new ErrorUtils();
    this._button = this._commonUtils.getById(inputConsts.SEARCH_BUTTON_IDNAME);
    this._departureInput = this._commonUtils.getById(inputConsts.DEPARTURE_INPUT_IDNAME);
    this._arrivalInput = this._commonUtils.getById(inputConsts.ARRIVAL_INPUT_IDNAME);
  }

  addEventToButton() {
    this._button.addEventListener('click', () => {
      this.createPath();
    })
    this._departureInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.createPath();
      }
    })
    this._arrivalInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.createPath();
      }
    })
  }

  createPath() {
    if (this._errorUtils.inputErrorExists()) {
      this._errorUtils.alertCorrespondingError();
    }
  }
}
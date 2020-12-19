import { SubwayPathModel } from './models';
import { SubwayPathView } from './views';
import { SubwayPathViewModel } from './viewModels';

const pathModel = new SubwayPathModel();
const pathViewModel = new SubwayPathViewModel(pathModel);
const appContainer = document.querySelector('#app');

const pathView = new SubwayPathView(pathViewModel, appContainer);

pathModel.setDataToDijkstraForShortestPath();
pathModel.setDataToDijkstraForMinimumTimePath();

console.log(pathModel.findShortestPath('양재시민의숲', '교대'));
console.log(pathModel.findMinimumTimePath('양재시민의숲', '교대'));

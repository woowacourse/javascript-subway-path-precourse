import { subwayPathModel } from './models';

const pathModel = new subwayPathModel();

pathModel.setDataToDijkstraForShortestPath();
pathModel.setDataToDijkstraForMinimumTimePath();

console.log(pathModel.findShortestPath('양재시민의숲', '교대'));
console.log(pathModel.findMinimumTimePath('양재시민의숲', '교대'));

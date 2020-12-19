import { subwayPathModel } from './models';

const pathModel = new subwayPathModel();

pathModel.setDataToDijkstraForShortestPath();
pathModel.setDataToDijkstraForMinimumTimePath();

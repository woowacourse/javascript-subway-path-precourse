import { SubwayPathModel } from './models';
import { SubwayPathView } from './views';
import { SubwayPathViewModel } from './viewModels';

const pathModel = new SubwayPathModel();
const pathViewModel = new SubwayPathViewModel(pathModel);
const appContainer = document.querySelector('#app');

const pathView = new SubwayPathView(pathViewModel, appContainer);

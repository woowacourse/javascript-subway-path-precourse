import Dijkstra from './utils/Dijkstra.js';
import { default as view } from './view/view.js';
import MakeTree from './model/makeTree.js';

export const timeDijkstra = new Dijkstra();
export const distanceDijkstra = new Dijkstra();
new MakeTree();

const findRoute = document.querySelector('#search-button');

findRoute.addEventListener('click', () => {
  view.show();
});

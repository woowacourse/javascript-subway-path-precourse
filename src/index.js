import View from './view/view.js';

const findRoute = document.querySelector('#search-button');

findRoute.addEventListener('click', () => {
  View.show();
});

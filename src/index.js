import MainLayout from './view/mainLayout.js';
import Controller from './controller/controller.js'

const app = document.querySelector('#app');

const initHTML = function () {
    console.log('initHTML')
  const controller = new Controller();
    // const mainLayout = new MainLayout();
    app.append(controller.view.rendered);


};

initHTML();
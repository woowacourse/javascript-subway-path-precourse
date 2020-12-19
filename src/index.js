import MainLayout from './view/mainLayout.js';
const app = document.querySelector('#app');

const initHTML = function () {
    console.log('initHTML')
  // const controller = new Controller();
  // app.append(managerContainer, sectionContainer);
    const mainLayout = new MainLayout();
  app.append(mainLayout.rendered);


  //     managerContainer.append(

  //       controller.viewList.station.elements.managerButton.$el,
  //       controller.viewList.line.elements.managerButton.$el,
  //       controller.viewList.section.elements.managerButton.$el,
  //       controller.viewList.mapPrint.elements.managerButton.$el,
  //     );
  //   };
};

initHTML();
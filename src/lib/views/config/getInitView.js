import Apptitle from "../sections/Apptitle.js";

export default () => {
  const $appContainer = document.getElementById("app");
  $appContainer.appendChild(Apptitle.element);
};

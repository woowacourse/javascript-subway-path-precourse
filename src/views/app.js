import searchPage from "../views/search/searchPage.js";

export default function app(timeTableData, checkRadioInput) {
  let app = ``;

  app = searchPage(timeTableData, checkRadioInput);

  return app;
}

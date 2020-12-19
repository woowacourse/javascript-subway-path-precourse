import searchPage from "../views/search/searchPage.js";

export default function app(timeTableData) {
  let app = ``;

  app = searchPage(timeTableData);

  return app;
}

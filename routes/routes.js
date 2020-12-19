const convertPageByElementId = (pageElements, pageElementId) => {
  pageElements.forEach((element) => {
    if (element.id === pageElementId) {
      element.setAttribute('style', 'display: block;');
    } else {
      element.setAttribute('style', 'display: none;');
    }
  });
};

export const hashRouteWithElements = (pageElements, defaultPageElement) => {
  const hash = window.location.hash.substr(1);
  let pageElementId;
  if (hash === '') {
    pageElementId = defaultPageElement.id;
  } else {
    pageElementId = hash;
  }
  convertPageByElementId(pageElements, pageElementId);
};

export default {
  hashRouteWithElements,
};

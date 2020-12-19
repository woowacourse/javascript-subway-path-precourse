const getPathRowTemplate = (nodes) => {
  let nodesTemplate = '';
  nodes.forEach((node, index) => {
    nodesTemplate += node;
    if (index !== nodes.length) {
      nodesTemplate += '🡆';
    }
  });
  return `
    <td colspan="2">${nodesTemplate}</td>
  `;
};

export const getResultTableBodyTemplate = (distance, time, path) => {
  const pathRowTemplate = getPathRowTemplate(path);

  return `
    <tr>
      <td>${distance}km</td>
      <td>${time}분</td>
    </tr>
    <tr>
      ${pathRowTemplate}
    </tr>
  `;
};

export default {
  getResultTableBodyTemplate,
};

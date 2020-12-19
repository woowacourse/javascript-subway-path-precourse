export const showResult = (result, target) => {
  let path = result.join(' ➡');
  const html = `
  <table>
  <thead>
    <tr>
      <th>총 거리</th>
      <th>총 소요 시간</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10km</td>
      <td>12분</td>
    </tr>
    <tr>
      <td colspan="2">${path}</td>
    </tr>
  </tbody>
  </table>`;
  target.innerHTML = html;
};

export const clearInput = (...inputs) => {
  inputs.forEach(element => (element.value = ''));
};

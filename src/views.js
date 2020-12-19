export const showResult = (result, target) => {
  let path = result.join(' ➡');
  const html = `
  <table>
  <thead>
    <tr>
      <th>총거리</th>
      <th>소요시간</th>
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

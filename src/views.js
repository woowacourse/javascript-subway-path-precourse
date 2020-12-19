export const showResult = (route, distance, time, target) => {
  let path = route.join(' ➡');
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
      <td>${distance}km</td>
      <td>${time}분</td>
    </tr>
    <tr>
      <td colspan="2">${path}</td>
    </tr>
  </tbody>
  </table>`;
  target.innerHTML = html;
};

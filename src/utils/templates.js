export const getResultHeader = (resultByThisWeight) => {
  return `<h2> 📝 결과 </h2>
        <h4> ${resultByThisWeight} </h4>
        <table id="result-table"></table>`;
};

export const resultTableTemplate = (time, distance, line) => {
  return `
    <thead>
      <th>총 거리</th>
      <th> 총 소요시간</th>
    </thead>
    <tbody>
      <tr>
        <td>${distance}km</td>
        <td>${time}분</td>
      </tr>
      <tr>
        <td colspan="2"> ${line.join(' -> ')} </td>
      </tr>
    </tbody>
    `;
};

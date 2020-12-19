function searchPage(timeTableData, checkedRadioInput) {
  let page = `
    <h2>📝 결과</h2>
    <h4>${checkedRadioInput}</h4>
    <table width = "400px" border = 1px solid black>
    <thead>
    <tr>    
        <th>총 거리</th>
        <th>총 소요시간</th>
    </tr>
    </thead>
    <tr>    
        <td>${timeTableData.totalDistance}km</td>
        <td>${timeTableData.totalTime}분</td>
    </tr>
    <tr>    
        <td colspan="2">${timeTableData.minPath.join(" -> ")}</td>
    </tr>
    <tbody>
    </tbody>
    </table>
    `;

  return page;
}

export default searchPage;

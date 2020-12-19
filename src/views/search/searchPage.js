function searchPage() {
  let page = `
    <h2>📝 결과</h2>
    <h4>최단거리/최소시간</h4>
    <table width = "400px" border = 1px solid black>
    <thead>
    <tr>    
        <th>총 거리</th>
        <th>총 소요시간</th>
    </tr>
    </thead>
    <tr>    
        <td>km</td>
        <td>분</td>
    </tr>
    <tr>    
        <td colspan="2">ㅇ->ㅇ->ㅇ></td>
    </tr>
    <tbody>
    </tbody>
    </table>
    `;

  return page;
}

export default searchPage;

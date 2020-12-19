export const showResult = () => {
  console.log('결과');
  const resultContainer = document.querySelector('#result-container');
  const result = document.createElement('div');

  let resultTable = `
    <h2>📝 결과</h2>
    <table border=1px id=line-table> 
      <tr>
        <th>총 거리</th><th>총 소요시간</th>
      </tr>
    </table>`;

  result.innerHTML = resultTable;

  resultContainer.appendChild(result);
};

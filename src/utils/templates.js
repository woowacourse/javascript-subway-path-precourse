export const getResultHeader = (resultByThisWeight) => {
  return `<h2> 📝 결과 </h2>
        <h4> ${resultByThisWeight} </h4>
        <table id="result-table"></table>`;
};

export const tableHeader = () => {
  return `<th>총 거리</th>
    <th> 총 소요시간</th>`;
};

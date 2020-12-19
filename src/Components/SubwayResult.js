class SubwayResult {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
  }

  render = ({ totalDistance, totalTime, path }) => {
    this.$target.innerHTML = `
    <table border="1">
        <tr>
          <th>총 거리</th>
          <th>총 소요시간</th>
        </tr>
        <tr>
          <td>${totalDistance}km</td>
          <td>${totalTime}분</td>
        <tr>
        <tr>
          <td colspan="2">${path.join("->")}</td>
        </tr>
    </table>
    
    `;
  };
}

export default SubwayResult;

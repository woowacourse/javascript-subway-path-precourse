export default class Result {
  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.createHeader(target);
    this.createSubTitle(target);
  }

  createHeader(target) {
    const h2 = document.createElement('h2');
    target.appendChild(h2);
    h2.innerHTML = `📝 결과`;
  }
  
  createSubTitle(target) {
    const { searchType } = this.props;
    const h3 = document.createElement('h3');
    h3.innerHTML = `${searchType}`
    target.appendChild(h3);
  }
}
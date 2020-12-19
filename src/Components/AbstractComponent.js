export default class AbstractComponent {
  constructor(props) {
    const { id, classList, $parent, tagname } = props;
    this.props = props;

    this.$component = document.createElement(tagname || "div");
    $parent?.appendChild(this.$component);
    classList?.forEach(className => this.$component.classList.add(className));
    if (id) {
      this.$component.id = id;
    }
  }

  setState(state) {
    this.state = { ...this.state, ...state };
    this.render();
  }

  render() {
    this.$component.innerHTML = "";
  }
}
class Component {
  _$target;
  _props;

  constructor($target, props) {
    this._$target = $target;
    this._props = props;
    this.removeEventListenerAll();
    this.initializeEventListener();
  }

  removeEventListenerAll() {
    const $targetClone = this._$target.cloneNode(true);
    this._$target.parentNode.replaceChild($targetClone, this._$target);
    this._$target = $targetClone;
  }

  initializeEventListener() {}

  mountTemplate() {}

  initializeStates() {}

  mountComponents() {}

  render = () => {
    this.mountTemplate();
    this.mountComponents();
  };
}

export default Component;

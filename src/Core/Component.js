import { reRenderEvent, dispatchReRender } from "../utils/events.js";

export default class Component {
  constructor() {
    this.state = {
      start: "",
      end: "",
      method: null,
    };
  }

  setState(state) {
    this.state = state;
    dispatchReRender();
  }

  mount() {}

  render() {}
}

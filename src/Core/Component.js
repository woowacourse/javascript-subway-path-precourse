import { reRenderEvent, dispatchReRender } from "../utils/events.js";

export default class Component {
  constructor() {
    this.state = {
      start: "",
      end: "",
      method: "minimumDistance",
      route: [],
      short: [],
    };
  }

  setState(state) {
    this.state = state;
    dispatchReRender();
  }

  mount() {}

  render() {}
}

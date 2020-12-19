export { reRenderEvent, dispatchReRender };

const reRenderEvent = new CustomEvent("changeState");
const dispatchReRender = () => window.dispatchEvent(reRenderEvent);

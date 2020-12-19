import CommonUtils from '../utils/commonUtils.js';

export default class Render {
  // eslint-disable-next-line class-methods-use-this
  static createElement({
    tag,
    id = '',
    innerHTML = '',
    classList = [],
    // children = [],
    eventListener = {}, // {click: [], hover: []}
    ...rest
  } = {}) {
    const node = document.createElement(tag);
    CommonUtils.isEmpty(id) ? '' : (node.id = id);
    CommonUtils.isEmpty(innerHTML) ? '' : (node.innerHTML = innerHTML);
    CommonUtils.isEmpty(classList) ? '' : node.classList.add(...classList);
    if (!CommonUtils.isEmpty(eventListener)) {
      this.$addEventListener(node, eventListener);
    }
    if (!CommonUtils.isEmpty(rest)) {
      this.$setAttribute(node, rest);
    }
    // TODO: childeren
    return node;
  }

  static $setAttribute(node, attribute) {
    for (const key in attribute) {
      node.setAttribute(`${key}`, attribute[key]);
    }
  }

  static $createElementNode(element, children = {}) {
    return {
      $el: element,
      $children: children,
    };
  }

  static $render(root) {
    const element = root.$el;
    // console.log(`root:${root}`);
    // console.log(`elem: ${element}`);
    if (!CommonUtils.isEmpty(root.$children)) {
      for (const child in root.$children) {
        element.append(this.$render(root.$children[child]));
      }
    }

    return element;
  }

  static $appendChildElement(parent, name, child) {
    parent.$children[name] = child;
  }
}

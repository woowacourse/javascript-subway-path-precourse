export const makeElement = ({
	tag = 'div',
	innerText,
	id,
	classes,
	placeholder,
	type,
	value,
	innerHTML,
	style,
	checked,
	name,
	clickEvent,
}) => {
	const element = document.createElement(tag);
	if (innerText) element.innerText = innerText;
	if (id) element.id = id;
	if (classes) element.classList.add(...classes);
	if (placeholder) element.placeholder = placeholder;
	if (type) element.type = type;
	if (value) element.value = value;
	if (innerHTML) element.innerHTML = innerHTML;
	if (style) element.style.cssText = style;
	if (checked) element.checked = 'checked';
	if (name) element.name = name;
	if (clickEvent) element.addEventListener('click', clickEvent);
	return element;
};

export const appendChilds = (parent, childs) => {
	childs.forEach((child) => {
		parent.appendChild(child);
	});
};

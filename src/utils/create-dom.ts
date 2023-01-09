export const createElement = (tag: string) => {
	return document.createElement(tag)
}

interface IElement {
	tag: string
	children: IElement[] | string
}

export const render = (obj: IElement, root: HTMLElement | ShadowRoot) => {
	const el = document.createElement(obj.tag)
	if (typeof obj.children === 'string') {
		el.innerHTML += obj.children
	} else if (obj.children) {
		obj.children.forEach(item => render(item, el))
	}

	root.appendChild(el)
}

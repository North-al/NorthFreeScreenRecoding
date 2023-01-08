export class NorthHeader extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })
		const span = document.createElement('span')

		const text = this.getAttribute('text')

		span.textContent = text

		shadow.appendChild(span)

		const blue = 'blue'
		span.styles`
            color: ${'red'};
            background: ${blue};
            font-size: ${'20px'};
            text-center: center;`
	}

	connectedCallback() {
		console.log('首次插入调用')
	}
}

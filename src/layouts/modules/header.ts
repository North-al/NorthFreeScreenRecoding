import headerHTML from '../../template/header.html?raw'

export class NorthHeader extends HTMLElement {
	constructor() {
		super()
		const shadow = this.attachShadow({ mode: 'open' })

		shadow.innerHTML = headerHTML
	}

	connectedCallback() {
		console.log('首次插入调用')
	}
}

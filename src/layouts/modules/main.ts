import mainHTML from '../../template/card.html?raw'

export class NorthMain extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		const width = this.getAttribute('width') ?? '0'
		const height = this.getAttribute('width') ?? '0'

		shadow.innerHTML = mainHTML.replace('set_width', width).replace('set_height', height)
	}
}

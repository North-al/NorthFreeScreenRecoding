import cardHTML from '../../template/card.html?raw'

export class NorthCard extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		const width = this.getAttribute('width') ?? '0'
		const height = this.getAttribute('height') ?? '0'

		shadow.innerHTML = cardHTML.replace('set_width', width).replace('set_height', height)
	}
}

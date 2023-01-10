import contentHTML from '../../template/content.html?raw'

export class NorthContent extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		const height = this.getAttribute('height') ?? '0'
		const minHeight = this.getAttribute('mh') ?? '0'

		shadow.innerHTML = contentHTML.replace('set_height', height).replace('set_minHeight', minHeight)
	}
}

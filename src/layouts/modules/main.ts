import mainHTML from '../../template/main.html?raw'
export class NorthMain extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		shadow.innerHTML = mainHTML
	}
}

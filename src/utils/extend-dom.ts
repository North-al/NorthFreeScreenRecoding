function createStyleString(arg: IArguments) {
	const [, ...rest] = arg

	let styleArr = arg[0] as string[]

	styleArr = styleArr
		.join('')
		.replace(/\n/g, '')
		.split(';')
		.map(str => str.trimStart())

	let index = 0
	styleArr = styleArr.map(item => {
		const flag1 = item.lastIndexOf(': ') !== -1 ? item.lastIndexOf(': ') + 2 === item.length : false
		const flag2 = item.lastIndexOf(':') !== -1 ? item.lastIndexOf(':') + 1 === item.length : false

		if (flag1) {
			item = item.replace(': ', `: ${rest[index]}`)
			index++
		} else if (flag2) {
			item = item.replace(':', `: ${rest[index]}`)
			index++
		}

		return item
	})

	return styleArr.join('; ')
}

export const setupExtendDom = () => {
	HTMLElement.prototype.styles = function () {
		const styleStr = createStyleString(arguments)
		let style = this.getAttribute('style')
		if (style) {
			style += styleStr
		} else {
			style = styleStr
		}

		this.setAttribute('style', style)
		return this
	}
}

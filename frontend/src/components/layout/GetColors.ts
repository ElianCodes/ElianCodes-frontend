function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const colors = [
	{ class: 'primary-green', code: '#86EFAC'},
	{ class: 'primary-blue', code: '#93C5FD'},
	{ class: 'primary-red', code: '#FCA5A5'},
	{ class: 'primary-orange', code: '#FDBA74'},
	{ class: 'primary-fuchsia', code: '#F0ABFC'}
]

const getNewColor = () => {
	return colors[getRandomInt(colors.length)]
}

const init = () => {
	const color = getNewColor();
	document.documentElement.style.setProperty('--random-color', color.code)
	document.documentElement.style.setProperty('--color-for-bg', document.documentElement.classList.contains('dark') ? 'black' : color.code)
}

export { init }
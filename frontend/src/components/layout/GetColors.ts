function getRandomInt(max) {
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
	document.querySelectorAll('.use-color').forEach(element => {
		colors.forEach(color => element.classList.remove(`text-${color.class}`));
		element.classList.add(`text-${color.class}`)
	});
	setBgColor(color)
}

const setBgColor = (color) => {
	if (document.querySelector('html').getAttribute('class') != undefined && !document.querySelector('html').getAttribute('class').includes('dark') && document.querySelector('html').getAttribute('class').includes('index-bg')){
		document.querySelector('html').setAttribute('style', `background: linear-gradient(90deg, #FFF 50%, ${color.code} 50%)`)
	} else if (document.querySelector('html').getAttribute('class').includes('dark')) {
		document.querySelector('html').setAttribute('style', `background: linear-gradient(90deg, #000 50%, #000 50%)`)
	} else {
		document.querySelector('html').setAttribute('style', '')
	}
}

export { init }
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getNewColor = () => {
	const colors = [
		{ class: 'text-primary-green', code: '#86EFAC'},
		{ class: 'text-primary-blue', code: '#93C5FD'},
		{ class: 'text-primary-red', code: '#FCA5A5'},
		{ class: 'text-primary-orange', code: '#FDBA74'},
		{ class: 'text-primary-fuchsia', code: '#F0ABFC'}
	]
	return colors[getRandomInt(colors.length)]
}

const init = () => {
	const color = getNewColor();
	document.querySelectorAll('.use-color').forEach(element => {
		element.classList.add(color.class)
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
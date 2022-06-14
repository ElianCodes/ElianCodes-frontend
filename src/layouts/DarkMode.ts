// initial load
const theme: string = (() => {
	if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
		return localStorage.getItem('theme');
	}
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	return 'light';
})();

// darkmode toggle button
document.addEventListener('DOMContentLoaded', (): void => {
	document.querySelectorAll('button.toggleMode').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			document.documentElement.classList.toggle('dark')
			localStorage.getItem('theme') === 'dark' ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark')
			document.documentElement.classList.add('transition-colors', 'ease-in-out', 'duration-500');
			setTimeout(() => {
				document.documentElement.classList.remove('transition-colors', 'ease-in-out', 'duration-500')
			}, 500)
		})	
	})
})

// color-theme system trigger
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
	const theme: string = (() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	})()
	if (theme === 'light') {
		document.documentElement.classList.remove('dark');
	} else {
		document.documentElement.classList.add('dark');
	}
})
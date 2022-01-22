const getThemeCookie = (cname: string): string => {
	const name = cname + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

const setThemeCookie = (cname: string, cvalue: string) => {
	const d = new Date();
	d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

let darkModeActive = false;

if (getThemeCookie('theme') === 'dark' || (getThemeCookie('theme') === "" && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	darkModeActive = true;
}

document.addEventListener('DOMContentLoaded', (): void => {
	darkModeActive ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
	document.querySelectorAll('button.toggleMode').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			console.log(darkModeActive)
			document.documentElement.classList.toggle('dark')
			setThemeCookie('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light')
			document.documentElement.classList.add('transition-colors', 'ease-in-out', 'duration-500');
			setTimeout(() => {
				document.documentElement.classList.remove('transition-colors', 'ease-in-out', 'duration-500')
			}, 500)
		})
	})
})


<template>
	<header :class="overlay ? 'overlay' : ''">
		<nav>
			<h1><a href="/" title="home" :class="[logoColor ? logoColor : 'use-color', 'home']">Elian Van Cutsem</a></h1>
			<div>
				<ul :class="[overlay ? 'overlay' : '', 'textMenu']">
					<li v-for="link in navLinks" :key="link.link">
						<a :href="link.link" :class="menuColor ? menuColor : 'use-color'">{{ link.name }}</a>
					</li>
					<li class="flex justify-end">
						<svg v-if="currentTheme == 'light'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="darkMode">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>
						<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 use-color" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="lightMode">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
						</svg>
					</li>
					<li v-if="overlay"><p class="overlay-text--no-absolute"><a rel="nofollow noreferer" href="https://www.vuejs.org" target="_blank">Vue</a></p></li>
				</ul>
			</div>
			<div class="mobile-menu flex">
				<button class="px-6 use-color">
					<svg v-if="currentTheme == 'light'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="darkMode">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
					<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="lightMode">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
					</svg>
				</button>
				<button class="toggle-menu" @click="openMenu" v-if="!menuOpen">
					<span class="sr-only">Open Menu</span>
					<svg class="w-8 h-8 use-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
				</button>
				<div class="mobile-list" v-if="menuOpen">
					<div class="use-color">
						<p>Elian Van Cutsem</p>
						<button class="close-menu" @click="closeMenu">
							<span class="sr-only">Close Menu</span>
							<svg class="w-8 h-8 use-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
						</button>
					</div>
					<ul>
						<li v-for="link in navLinks" :key="link.link">
							<a :href="link.link" class="mobile-route">{{ link.name }}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	props: {
    	textMenu: Boolean,
		menuColor: String,
		logoColor: String,
		overlay: Boolean,
  	},
	methods: {
		openMenu() {
			this.menuOpen = true;
		},
		closeMenu() {
			this.menuOpen = false;
		},
		lightMode() {
			this.setCookie('theme', 'light')
			document.documentElement.classList.remove('dark')
		},
		darkMode() {
			this.setCookie('theme', 'dark')
		},
		setCookie(cname, cvalue) {
			document.cookie = cname + "=" + cvalue + ";path=/";
			this.currentTheme = cvalue
			document.dispatchEvent(new Event('changedMode'));
		},
	},
	mounted: function () {
		let name = "theme=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for(let i = 0; i <ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				if (c.substring(name.length, c.length) == "system"){
					if (window.matchMedia('(prefers-color-scheme: dark)').matches){
						this.currentTheme = 'dark'
					} else {
						this.currentTheme = 'light'
					}
				} else {
					this.currentTheme = c.substring(name.length, c.length);
				}
			}
		}
		return "";
	},
	data() {
		return {
			menuOpen: false,
			currentTheme: ''
		}
	},
	setup({ textMenu, logoColor, menuColor, overlay }) {
		const navLinks = [
			{ name: 'Home', link: '/'},
			{ name: 'Blog', link: '/blog/'},
			{ name: 'Certifications', link: '/certifications/'},
		]
		return { navLinks, textMenu, logoColor, menuColor, overlay  }
	}
}
</script>

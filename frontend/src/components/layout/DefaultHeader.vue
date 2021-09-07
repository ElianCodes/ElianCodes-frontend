<template>
	<header :class="overlay ? 'overlay' : ''">
		<nav>
			<h1><a href="/" title="home" :class="[logoColor ? logoColor : 'use-color', 'home']">Elian Van Cutsem</a></h1>
			<ul :class="[overlay ? 'overlay' : '', 'textMenu']">
				<li v-for="link in navLinks" :key="link.link">
					<a :href="link.link" :class="menuColor ? menuColor : 'use-color'">{{ link.name }}</a>
				</li>
				<li v-if="overlay"><p class="overlay-text--no-absolute"><a rel="nofollow noreferer" href="https://www.vuejs.org" target="_blank">Vue</a></p></li>
			</ul>
			<div class="mobile-menu">
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

<script lang='ts'>
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
		}
	},
	data() {
		return {
			menuOpen: false as boolean
		}
	},
	setup({ textMenu, logoColor, menuColor, overlay }) {
		const navLinks = [
			{ name: 'Home', link: '/'},
			{ name: 'Blog', link: '/blog/'},
			{ name: 'Projects', link: '/projects/'},
			{ name: 'Certifications', link: '/certifications/'},
		]
		return { navLinks, textMenu, logoColor, menuColor, overlay  }
	}
}
</script>

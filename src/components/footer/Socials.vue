<template>
	<div class="col-md">
		<div class="ftco-footer-widget mb-4">
			<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
				<Social 
					v-for="social in socials" :key="social.link"
					v-bind:social="social"
				/>
			</ul>
		</div>
	</div>
</template>

<script>
import Social from './Social'

export default {
	name: 'Socials',
	components: {
		Social
	},
	data: function (){
		return {
			socials: [
				{ icon: 'icon-github', link: 'https://github.com/ElianVanCutsem'},
				{ icon: 'icon-twitter', link: 'https://twitter.com/vancutsemelian'},
				{ icon: 'icon-linkedin', link: 'https://www.linkedin.com/in/elianvancutsem/'}
			]
		}
	}
}
</script>
<template>
	<footer class="ftco-footer ftco-section">
		<div class="container">
			<div class="row mb-5">
				<Socials />
				<Contact />
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<p><a href="http://elianvancutsem.com" target="_blank">Elian Van Cutsem</a>, writing code since 1999</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import Socials from './footer/Socials'
import Contact from './footer/Contact'

export default {
	name: 'Footer',
	components: {
		Socials,
		Contact
	}
}
</script>
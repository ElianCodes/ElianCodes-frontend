<template>
  <div class="col-md">
		<div class="ftco-footer-widget mb-4">
			<h2 class="ftco-heading-2">Have a Question?</h2>
			<div class="block-23 mb-3">
				<ul>
					<ContactItem
						v-for="item in contactItems"
						:key="item.ref"
						v-bind:contactItem="item"
					/>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import ContactItem from './ContactItem'

export default {
	name: 'Contact',
	components: {
		ContactItem
	},
	data: function (){
		return {
			contactItems: [
				{ ref: "mailto:elianvancutsem@gmail.com", icon:"icon-envelope", text: "elianvancutsem@gmail.com"}
			]
		}
	}
}
</script>
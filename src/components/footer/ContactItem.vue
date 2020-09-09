<template>
  <li>
		<a :href="contactItem.ref" class="contactItem">
			<span class="icon" :class="contactItem.icon"></span>
			<span class="text">{{contactItem.text}}</span>
		</a>
	</li>
</template>

<script>
export default {
	name: 'ContactItem',
	props: ["contactItem"]
}
</script>

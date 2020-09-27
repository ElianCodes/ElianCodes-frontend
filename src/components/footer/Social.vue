<template>
	<li class="ftco-animate">
		<a :href="social.link" target="_blank" class="socialIcon" rel="noreferrer">
			<span :class="social.icon" />
		</a>
	</li>
</template>

<script>
export default {
	name: 'Social',
	props: ['social']
}
</script>
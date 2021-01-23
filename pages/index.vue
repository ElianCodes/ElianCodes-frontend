<template>
  <main>
    <welcome />
    <about />
  </main>
</template>

<script lang="ts">
import welcome from '~/components/home/welcome.vue'
import about from '~/components/home/about.vue'

export default {
  components: { welcome, about },
  name: 'Home'
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

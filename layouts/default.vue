<template>
  <div>
    <navbar />
    <Nuxt />
    <go-to-top />
    <custom-footer />
  </div>
</template>

<script lang="ts">
import GoToTop from '~/components/layout/go-to-top'

export default {
  name: 'DefaultLayout',
  components: { GoToTop },
}
</script>

<style>
.hidden {
  display: none;
}
</style>

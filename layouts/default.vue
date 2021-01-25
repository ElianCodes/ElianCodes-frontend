<template>
  <div>
    <navbar />
    <Nuxt />
    <custom-footer />
  </div>
</template>

<script lang="ts">
export default {
  name: 'DefaultLayout',
}
</script>

<style>
.hidden {
  display: none;
}
</style>

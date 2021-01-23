<template>
  <div class="container">
    <welcome />
  </div>
</template>

<script lang="ts">
import welcome from '~/components/home/welcome.vue'

export default {
  components: { welcome },
  name: 'Home'
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>

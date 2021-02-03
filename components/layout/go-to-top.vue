<template>
  <div>
    <font-awesome-icon
      class="up"
      :icon="['fas', 'arrow-up']"
      @click="scrollToTop"
    />
  </div>
</template>

<script>
export default {
  name: 'GoToTop',
  methods: {
    scrollToTop: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.up {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 2%;
}
.up path {
  width: 20px;
  height: 200px;
}
</style>

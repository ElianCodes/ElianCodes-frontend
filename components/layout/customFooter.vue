<template>
  <footer
    class="px-5 bg-light d-flex flex-column justify-content-center align-items-center"
  >
    <div class="d-flex mt-5">
      <a target="_blank" class="d-flex mx-2 justify-content-center align-items-center text-dark icon rounded-circle" href="https://github.com/elianvancutsem">
        <font-awesome-icon class="icon-inner" :icon="['fab', 'github']" />
      </a>
      <a target="_blank" class="d-flex mx-2 justify-content-center align-items-center text-dark icon rounded-circle" href="https://twitter.com/vancutsemelian">
        <font-awesome-icon class="icon-inner" :icon="['fab', 'twitter']" />
      </a>
      <a target="_blank" class="d-flex mx-2 justify-content-center align-items-center text-dark icon rounded-circle" href="https://www.linkedin.com/in/elianvancutsem/">
        <font-awesome-icon class="icon-inner" :icon="['fab', 'linkedin-in']" />
      </a>
      <a target="_blank" class="d-flex mx-2 justify-content-center align-items-center text-dark icon rounded-circle" href="https://www.linkedin.com/in/elianvancutsem/">
        <font-awesome-icon class="icon-inner" :icon="['fas', 'envelope']" />
      </a>
    </div>
    <p class="text-muted my-4">
      This website was made with
      <a target="_blank" href="https://nuxtjs.org/">Nuxt</a>,
      <a target="_blank" href="https://www.typescriptlang.org/">Typescript</a>
      and <a target="_blank" href="https://getbootstrap.com/">Bootstrap</a>
    </p>
    <div class="text-muted mb-5">
      <h3 class="hidden">Copyright information</h3>
      <p>
        &copy;&nbsp;<a href="http://www.elianvancutsem.com">Elian Van Cutsem</a>,
        Writing code since 2014
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',
}
</script>

<style scoped>
a.icon {
  border: 1px solid #ccc;
  width: 42px;
  height: 42px;
}

a.icon:hover {
  border: 1px solid #000;
  transition: border 500ms;
}
</style>

<template>
  <nav>
    <h2 class="hidden">Navigation</h2>
    <b-navbar toggleable="md" type="light">
      <h2 class="hidden">Main Navigation</h2>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><nuxt-link to="/"><span class="navlink">Home</span></nuxt-link></b-nav-item>
          <b-nav-item><nuxt-link to="/projects"><span class="navlink">Projects</span></nuxt-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.navlink {
  color: black;
}
.navlink:hover {
  transition: ease-in-out;
  transition-duration: 300ms;
  color: black;
  text-decoration: none;
}
</style>
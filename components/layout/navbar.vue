<template>
  <div>
    <h2 class="hidden">Navigation</h2>
    <b-navbar
      fixed="top"
      toggleable="md"
      type="light"
      class="px-5 d-flex justify-content-around bg-white"
    >
      <nuxt-link to="/">
        <b-navbar-brand>Elian Van Cutsem</b-navbar-brand>
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <nuxt-link to="#about-section"
              ><span class="navlink">About</span></nuxt-link
            ></b-nav-item
          >
          <b-nav-item>
            <nuxt-link to="/projects/"
              ><span class="navlink">Projects</span></nuxt-link
            ></b-nav-item
          >
          <b-nav-item>
            <nuxt-link to="/blog/"
              ><span class="navlink">Blog</span></nuxt-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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

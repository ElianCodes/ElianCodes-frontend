<template>
  <div>
    <h2 class="hidden">Navigation</h2>
    <b-navbar
      fixed="top"
      toggleable="md"
      type="light"
      class="mx-2 px-md-5 d-flex justify-content-between bg-white"
    >
      <nuxt-link to="/">
        <b-navbar-brand>Elian Van Cutsem</b-navbar-brand>
      </nuxt-link>

      <b-navbar-toggle class="custom-toggler" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link to="/"
              ><span class="navlink">Home</span></nuxt-link
            ></b-nav-item
          >
          <hr />
          <b-nav-item>
            <nuxt-link to="/projects/"
              ><span class="navlink">Projects</span></nuxt-link
            ></b-nav-item
          >
          <hr />
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
hr {
  color: #cccccc;
  margin: 0;
}
.custom-toggler {
  color: black;
}
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

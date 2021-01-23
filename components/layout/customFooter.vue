<template>
  <footer>
    <section class="footer">
      <h2 class="hidden">Footer</h2>
      <div>
        <h3 class="text-white">Have a question?</h3>
        <p>
          <font-awesome-icon :icon="['fas', 'envelope']"  />
          <a href="mailto:elianvancutsem@gmail.com">elianvancutsem@gmail.com</a>
        </p>
      </div>
      <hr />
      <p>This website was made with <a target="_blank" href="https://nuxtjs.org/">Nuxt</a>, <a target="_blank" href="https://www.typescriptlang.org/">Typescript</a> and <a target="_blank" href="https://getbootstrap.com/">Bootstrap</a></p>
      <div class="d-flex justify-content-between">
        <div class="copyright">
          <h3 class="hidden">Copyright information</h3>
          <p>&copy;<a href="http://www.elianvancutsem.com">Elian Van Cutsem</a>, Writing code since 2014</p>
        </div>
        <div class="socials">
          <h3 class="hidden">Social links</h3>
          <a target="_blank" href="https://github.com/elianvancutsem">
            <font-awesome-icon class="icon" :icon="['fab', 'github']"  />
          </a>
          <a target="_blank" href="https://twitter.com/vancutsemelian">
            <font-awesome-icon class="icon" :icon="['fab', 'twitter']"  />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/elianvancutsem/">
            <font-awesome-icon class="icon" :icon="['fab', 'linkedin-in']"  />
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'custom-footer'
}
</script>

<style scoped>
.socials a{
  background-color: #1A1A1A;
  color: #7A7A7A;
  margin: 0 20px;
  height: 60px;
  width: 60px;
  display: inline-flex;
  border-radius: 100%;
}
.socials a:hover{
  color: white;
  transition: ease-in-out;
  transition-duration: 300ms;
  background-color: #7a7a7a;
}
.icon {
  margin: 0 auto;
  align-self: center;
  height: 35px;
  width: auto;
}
.footer { 
  margin: 0 200px;
}
footer {
  color: #7A7A7A;
  background-color: black;
  padding: 100px 0
}
hr {
  background-color: #7A7A7A;
}
.copyright {
  display: flex;
  align-items: center;  
}
.copyright p{
  margin-bottom: 0;  
}
.copyright a{
  color: #7A7A7A;
}
.copyright a:hover{
  color: white;
  transition: ease-in-out;
  transition-duration: 300ms;
  text-decoration: none;
}
</style>
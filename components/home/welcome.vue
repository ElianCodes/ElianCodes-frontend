<template>
  <section
    class="d-flex flex-column justify-content-center vh-100"
  >
    <h2 class="hidden">Who am i?</h2>
    <div>
      <vue-typed-js :strings="titles" :smart-backspace="true" :loop="true">
        <p class="text-center mx-auto display-4 mb-5">
          I'm a <span class="typing"></span>
        </p>
      </vue-typed-js>
      <div class="d-flex justify-content-center mb-5">
        <a target="_blank" class="text-dark mx-2 h3" href="https://github.com/elianvancutsem">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a target="_blank" class="h3 mx-2 text-dark" href="https://twitter.com/vancutsemelian">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a target="_blank" class="h3 mx-2 text-dark" href="https://www.linkedin.com/in/elianvancutsem/">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <a href="#about-section" class="arrow-down">
        <font-awesome-icon :icon="['fas', 'arrow-down']" />
      </a>
    </div>
  </section>
</template>

<script>
import VueTypedJs from 'vue-typed-js'
import Vue from 'vue'

Vue.use(VueTypedJs)
export default {
  name: 'Welcome',
  data() {
    return {
      titles: [
        'Webdeveloper',
        'Full-Stack developer',
        'Back-end developer',
        'Front-end engineer',
        'Front-end developer',
        'Software engineer',
        'Software developer',
      ],
    }
  },
}
</script>

<style scoped>
.welcome {
  background-image: url('~assets/background/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.arrow-down {
  color: #cccccc;
}

.arrow-down:hover {
  color: #000;
  transition: color 500ms;
}
</style>

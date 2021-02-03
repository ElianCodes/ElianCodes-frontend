<template>
  <section
    class="container d-flex flex-column justify-content-center vh-100"
  >
    <h2 class="hidden">Who am i?</h2>
    <div>
      <p class="no-wrap display-4 text-center">Elian Van Cutsem</p>
      <vue-typed-js :strings="titles" :smart-backspace="true" :loop="true">
        <p class="subtitle text-muted text-center mx-auto">
          I'm a <span class="typing"></span>
        </p>
      </vue-typed-js>
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

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 4rem;
  color: #35495e;
}

.subtitle {
  font-weight: 300;
  font-size: 2.4rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>

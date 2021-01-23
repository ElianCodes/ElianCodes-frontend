<template>
  <section class="welcome">
    <h2 class="hidden">Who am i?</h2>
    <p class="title">Elian Van Cutsem</p>
      <vue-typed-js
       :strings="titles"
       :smartBackspace="true"
       :loop="true"
      >
      <p class="subtitle mx-auto">I'm a <span class="typing"></span></p>
    </vue-typed-js>
  </section>
</template>

<script>
import VueTypedJs from 'vue-typed-js'
import Vue from 'vue';

Vue.use(VueTypedJs)
export default {
  name: 'welcome',
  data() {
    return {
      "titles": ["Webdeveloper", "Full-Stack developer", "Back-end developer", "Front-end engineer", "Front-end developer", "Software engineer", "Software developer"]
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.welcome {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
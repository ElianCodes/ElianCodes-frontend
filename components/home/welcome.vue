<template>
  <div>
    <h1 class="title">Elian Van Cutsem</h1>
      <vue-typed-js
       :strings="titles"
       :smartBackspace="true"
       :loop="true"
      >
      <p class="subtitle mx-auto">I'm a <span class="typing"></span></p>
    </vue-typed-js>
  </div>
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
</style>
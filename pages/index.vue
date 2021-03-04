<template>
    <main class="relative">  
      <section class="h-full mt-12 mx-12 grid grid-cols-2 gap-4 items-center">
        <div class="flex flex-col mr-24">
          <h1 class="title">👋 Hello</h1>
          <p class="subtitle">
            I'm a Webdeveloper
          </p>
          <p class="regular-text">
            My name is Elian Van Cutsem. I'm a Student and software engineer from belgium. On my personal site you'll find more info about myself and my projects. At the moment I'm doing an internship <a href="https://vbridge.eu" target="_blank">@vBridge</a> while finishing my Computer Science degree <a href="https://odisee.be/en" target="_blank">@Odisee</a>. I'm still learning lots of new technologies and skills everyday. On this site I try to blog about my findings and experiences and show off some projects I worked on.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img class="rounded-full w-96" src="~/assets/about/about3.png">
          <section class="text-white mt-24">
            <a href="https://github.com/elianvancutsem" target="_blank">
              <font-awesome-icon class="w-12 h-12" size="6x" :icon="['fab', 'github']" />
            </a>
            <a href="https://twitter.com/vancutsemelian" target="_blank">
              <font-awesome-icon class="w-12 h-12" size="6x" :icon="['fab', 'twitter']" />
            </a>
            <a href="https://linkedin.com/in/elianvancutsem" target="_blank">
              <font-awesome-icon class="w-12 h-12" size="6x" :icon="['fab', 'linkedin-in']" />
            </a>
          </section>
        </div>
      </section>
    </main>
</template>

<script lang="ts">

export default {
  name: 'Home',
  head: {
    title: 'Elian Van Cutsem | Home',
  },
}
</script>

<style>
.links {
  padding-top: 15px;
}
</style>

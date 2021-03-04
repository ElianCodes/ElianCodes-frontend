<template>
  <main class="relative">
    <nav class="flex justify-between mx-12 pt-12">
      <nuxt-link to="/" class="nav-title">Elian Van Cutsem</nuxt-link>
      <a class="text-white">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </a>
    </nav>
    <section class="h-full mt-12 mx-12 grid grid-cols-2 gap-4 items-center">
      <div class="flex flex-col mr-24">
        <h1 class="title">👋 Hello</h1>
        <p class="subtitle">
          I'm a Webdeveloper
        </p>
        <p class="regular-text">
          My name is Elian Van Cutsem. I'm a Student and software engineer from belgium. On my personal site you'll find more info about myself and my projects. At the moment I'm doing an internship @<a href="https://vbridge.eu" target="_blank">vBridge while finishing my Computer Science degree @<a href="https://odisee.be/en" target="_blank">Odisee</a>. I'm still learning lots of new technologies and skills everyday. On this site I try to blog about my findings and experiences and show off some projects I worked on.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <img class="rounded-full w-96" src="~/assets/about/about3.png">
        <section class="text-white mt-24">
          <font-awesome-icon class="w-12 h-12" size="6x" :icon="['fab', 'github']" />
          <font-awesome-icon class="w-12 h-12" size="6x" :icon="['fab', 'twitter']" />
          <font-awesome-icon class="w-12 h-12" size="6x" :icon="['fab', 'linkedin-in']" />
        </section>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import welcome from '~/components/home/welcome.vue'
import about from '~/components/home/about.vue'

export default {
  name: 'Home',
  data() {
    return {
      resumeItems: [
        {
          title: 'Experience',
          id: 'experience',
          type: 'items',
          items: [
            {
              id: 0,
              title: 'Full Stack software engineer',
              date: '2020-current',
              company: 'vBridge',
              link: 'https://www.vbridge.eu',
              icon: 'coffee',
            },
          ],
        },
        {
          title: 'Education',
          id: 'education',
          type: 'items',
          items: [
            {
              id: 0,
              title: 'Bachelor of Science in Computer Science',
              date: '2018-current',
              company: 'Odisee',
              link: 'https://www.odisee.be',
              icon: 'university',
            },
            {
              id: 1,
              title: 'Photography',
              date: '2014-2018',
              company: 'VISO Mariakerke',
              link: 'https://www.viso.be',
              icon: 'school',
            },
            {
              id: 2,
              title: 'Graphic Design',
              date: '2013-2014',
              company: 'VISO Mariakerke',
              link: 'https://www.viso.be',
              icon: 'school',
            },
          ],
        },
        {
          title: 'Skills',
          id: 'skills',
          type: 'skills',
          items: [
            { name: 'JavaScript' },
            { name: 'Vue.js' },
            { name: 'Laravel' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'Bootstrap' },
            { name: 'PHP' },
            { name: 'WordPress' },
            { name: 'C#' },
            { name: 'Java' },
            { name: 'Python' },
            { name: 'Flutter' },
            { name: 'Arduino' },
            { name: 'NoSQL' },
            { name: 'Relational databases / SQL' },
            { name: 'Linux' },
            { name: 'Docker' },
            { name: 'TailwindCSS' },
            { name: 'Nuxt.js' },
          ],
        },
        {
          title: 'Learning',
          id: 'learning',
          type: 'skills',
          items: [
            { name: 'ASP.NET' },
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'Express.js' },
            { name: 'Spring' },
            { name: 'Maven' },
          ],
        },
        {
          title: 'Want to learn',
          id: 'wantToLearn',
          type: 'skills',
          items: [{ name: 'Svelte' }, { name: 'Angular' }],
        },
      ],
    }
  },
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

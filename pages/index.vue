<template>
  <main>
    <h1 class="hidden">Elian Van Cutsem</h1>
    <welcome />
    <about :resume-items="resumeItems" />
  </main>
</template>

<script lang="ts">
import welcome from '~/components/home/welcome.vue'
import about from '~/components/home/about.vue'

export default {
  name: 'Home',
  components: { welcome, about },
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

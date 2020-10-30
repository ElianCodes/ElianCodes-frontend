<template>
  <div>
		<Overlay />
		<About v-bind:resumeItems="resumeItems[3].items"/>
		<Resume v-bind:resumeItems="resumeItems"/>
    <Projects />
	</div>
</template>

<script>
import Overlay from './Overlay'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'

export default {
  name: 'Home',
  components: {
    Overlay,
    About,
    Resume,
    Projects
  },
  data() {
    return {
      resumeItems: [
        { title: "Experience", id: "experience", type: "items",
          items: [
            { id: 0, title: "Full Stack software engineer", date: "2020-current", company: "vBridge", link: "https://www.vbridge.eu", icon: "flaticon-web-design"}
          ]
        },
        { title: "Education", id: "education", type: "items",
          items: [
            { id: 0, title: "Bachelor of Science in Computer Science", date: "2018-current", company: "Odisee", link: "https://www.odisee.be", icon: "flaticon-innovation"},
            { id: 1, title: "Photography", date: "2014-2018", company: "VISO Mariakerke", link: "https://www.viso.be", icon: "flaticon-ideas"},
            { id: 2, title: "Graphic Design", date: "2013-2014", company: "VISO Mariakerke", link: "https://www.viso.be", icon: "flaticon-ux-design"}
          ]
        },
        { title: "Skills", id: "skills", type: "skills",
          items: [
            {name: "JavaScript"}, {name: "Vue.js"}, {name: "Laravel"},
            {name: "HTML"}, {name: "CSS"}, {name: "Bootstrap"},
            {name: "PHP"}, {name: "WordPress"}, {name: "C#"},
            {name: "Java"}, {name: "Python"}, {name: "Flutter"},
            {name: "Arduino"}, {name: "NoSQL"}, {name: "Relational databases / SQL"},
            {name: "Linux"}, {name: "Docker"}, {name: "Tailwind"}
          ]
        },
        { title: "Learning", id: "learning", type: "skills", items: [
            {name: "ASP.NET"}, {name: "React.js"}, {name: "Node.js"},
            {name: "Express.js"}, {name: "Spring"}, {name: "Maven"}
          ]
        },
      ]
    }
  }
}
</script>
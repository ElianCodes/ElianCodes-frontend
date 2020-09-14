<template>
	<section class="ftco-section ftco-no-pb goto-here" id="resume-section">
		<div class="container">
			<div class="row">
				<ResumeNavigation 
          v-bind:items="resumeItems"
        />
				<div class="col-md-9">
          <ResumeItem 
            v-for="item in resumeItems"
            :key="item.id"
            v-bind:item="item"
          />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ResumeNavigation from './resume/ResumeNavigation'
import ResumeItem from './resume/ResumeItem'

export default {
  name: 'Resume',
  components: {
    ResumeNavigation,
    ResumeItem
  },
  data (){
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
            {name: "Linux"}, {name: "Docker"}
          ]
        },
        { title: "Learning", id: "learning", type: "skills", items: [
            {name: "TypeScript"}, {name: "ASP.NET"}, {name: "Tailwind"}, {name: "React"}
          ]
        },
      ]
    }
  }
}
</script>

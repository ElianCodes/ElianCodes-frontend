<template>
  <div>
		<Overlay />
		<About />
		<Resume />
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
  }
}
</script>
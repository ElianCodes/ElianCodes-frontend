<template>
  <div id="app">
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home'
import Footer from './components/Footer'

export default {
  name: "App",
  components: {
    Home, Footer
  }
}
</script>
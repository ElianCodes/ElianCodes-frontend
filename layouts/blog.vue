<template>
  <section>
    <navbar v-bind:menuOpened="menuOpened" @closeMenu="closeMenu"/>
    <section v-if="!menuOpened">
      <nav class="flex justify-between mx-12 pt-12">
        <nuxt-link to="/" class="nav-title">Elian Van Cutsem</nuxt-link>
        <div class="flex flex-row gap-4">
          <darkmode />
          <a class="text-green-500 cursor-pointer" v-on:click="menuOpened = true">
            <svg class="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </a>
        </div>
      </nav>
      <div class="flex overflow-hidden">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden mx-12">
          <div class="flex-1 flex flex-row overflow-hidden">
            <sidebar v-if="this.$nuxt.$route.path === '/blog'" class="block lg:hidden" />
            <sidebar class="hidden lg:block" />
            <nuxt class="z-50"/>
          </div>
        </div>
      </div>
    </section>
    <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="elianvancutsem" data-description="Buy me a coffee!" data-message="" data-color="#79D6B5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
  </section>
</template>

<script>
import Vue from 'vue'
import Navbar from '~/components/layout/navbar.vue';
import Darkmode from '~/components/layout/darkmode.vue';
import Sidebar from '~/components/blog/sidebar.vue'

export default Vue.extend({
  components: {
    Navbar, Darkmode, Sidebar
  },
  data () {
    return {
      menuOpened: false,
      showNavBar: true
    }
  },
  methods: {
    closeMenu (close) {
      this.menuOpened = close
    },
    toggleNavBar (value) {
      this.showNavBar = value
    }
  },
  created() {
    this.showNavBar = this.$nuxt.$route.path === '/blog' ? true : false
  }
})
</script>

<style scoped>

.fade-enter-active{
  animation: bounce-in .5s;
}
.fade-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
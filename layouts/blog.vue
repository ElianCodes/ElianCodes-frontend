<template>
  <section>
    <navbar v-bind:menuOpened="menuOpened" @closeMenu="closeMenu"/>
    <section v-if="!menuOpened">
      <nav class="flex justify-between mx-12 pt-12">
        <nuxt-link to="/" class="nav-title">Elian Van Cutsem</nuxt-link>
        <a class="text-green-500 cursor-pointer" v-on:click="menuOpened = true">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </a>
      </nav>
      <div class="h-screen flex overflow-hidden bg-white">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden mx-12">
          <div class="flex-1 z-0 flex overflow-hidden">
            <nuxt />
            <sidebar />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import sidebar from '~/components/blog/sidebar.vue'
import Navbar from '~/components/layout/navbar.vue';

export default {
  components: { sidebar, Navbar },
  data() {
    return {
      menuOpened: false
    }
  },
  methods: {
    closeMenu(close: boolean) {
      this.menuOpened = close
    }
  },
}
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
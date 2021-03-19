<template>
  <transition name="fade" mode="out-in" v-if="this.menuOpened">
    <section class="bg-white dark:bg-black w-screen h-screen" v-on:keyup.esc="$emit('closeMenu', false)">
      <nav class="flex justify-between mx-12 pt-12">
        <a v-on:click="closeMenuAndRoute('/')" class="nav-title cursor-pointer text-black dark:text-gray-200">Elian Van Cutsem</a>
        <a class="text-black dark:text-green-500 cursor-pointer" v-on:click="$emit('closeMenu', false)">
          <svg class="w-6 h-6 md:w-12 sm:h-12 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </a>
      </nav>
      <nav class="menu-links">
        <a v-on:click="closeMenuAndRoute('/')">
          <p class="background-text">About Me</p>
          <p class="link-text">About Me</p>
        </a>
        <a v-on:click="closeMenuAndRoute('/projects')">
          <p class="background-text">Projects</p>
          <p class="link-text">Projects</p>
        </a>
        <a v-on:click="closeMenuAndRoute('/blog')">
          <p class="background-text">Blog</p>
          <p class="link-text">Blog</p>
        </a>
      </nav>
    </section>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'navbar',
  props: [ 'menuOpened' ],
  methods: {
    /*
    closeMenuAndRoute (path: string) {
      this.$emit('closeMenu', false)
      this.$router.push({path: path})
      console.log(path)
    }*/
  }
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

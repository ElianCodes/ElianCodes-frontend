<template>
    <div>
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="fade" mode="out-in">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false
        }
    }
}
</script>

<style scoped>
fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
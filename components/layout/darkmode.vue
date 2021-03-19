<template>
    <div>
        <a v-on:click="activateLightMode" class="text-white cursor-pointer" v-if="activeTheme === 'dark'">
            <svg class="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </a>
         <a v-on:click="activateDarkMode" :class="this.classes + ' cursor-pointer'" v-else>
            <svg class="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </a>
    </div>
</template>

<script lang="ts">

export default {
    data: {
        activeTheme: 'system',
        classes: ""
    },
    methods: { /*
        activateSystem(): void {
            localStorage.theme = 'system'
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.activateDarkMode();
            } else {    
                this.activateLightMode();
            }
        },

        activateDarkMode():void  {
            localStorage.theme = 'dark'
            this.activeTheme = 'dark'
            document.documentElement.classList.add('dark');
            this.postActivate();
        },

        activateLightMode(): void {
            localStorage.theme = 'light'
            this.activeTheme = 'light'
            document.documentElement.classList.remove('dark');
            this.postActivate();
        },

        postActivate(): void {
            if (localStorage.theme === 'system') {
                document.documentElement.classList.add('system');
            } else {
                document.documentElement.classList.remove('system');
            }
        }*/
    },
    mounted() {/*
        if (localStorage.theme === undefined || localStorage.theme === 'system') {
            this.activateSystem();
        } else if (localStorage.theme === 'dark'){
            this.activateDarkMode();
        } else {
            this.activateLightMode();
        }
        console.log(this.$nuxt.$route.path == '/')
        this.classes = this.$nuxt.$route.path == '/' ? "text-white" : "text-green-500"*/
    }
}
</script>

<style>

</style>
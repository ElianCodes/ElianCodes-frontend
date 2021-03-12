import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Darkmode extends Vue {
    public activeTheme: string = 'system'
    public classes = ""

    activateSystem(): void {
        localStorage.theme = 'system'
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.activateDarkMode();
        } else {    
            this.activateLightMode();
        }
    }

    activateDarkMode():void  {
        localStorage.theme = 'dark'
        this.activeTheme = 'dark'
        document.documentElement.classList.add('dark');
        this.postActivate();
    }

    activateLightMode(): void {
        localStorage.theme = 'light'
        this.activeTheme = 'light'
        document.documentElement.classList.remove('dark');
        this.postActivate();
    }

    postActivate(): void {
        if (localStorage.theme === 'system') {
            document.documentElement.classList.add('system');
        } else {
            document.documentElement.classList.remove('system');
        }
    }

    mounted() {
        if (localStorage.theme === undefined || localStorage.theme === 'system') {
            this.activateSystem();
        } else if (localStorage.theme === 'dark'){
            this.activateDarkMode();
        } else {
            this.activateLightMode();
        }
        console.log(this.$nuxt.$route.path == '/')
        this.classes = this.$nuxt.$route.path == '/' ? "text-white" : "text-green-500"
    }
}
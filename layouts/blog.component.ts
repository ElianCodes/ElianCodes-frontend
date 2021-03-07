import { Vue, Component } from 'nuxt-property-decorator'
import Navbar from '~/components/layout/navbar.vue';
import Darkmode from '~/components/layout/darkmode.vue';
import Sidebar from '~/components/blog/sidebar.vue'

@Component({
    components: { Navbar, Darkmode, Sidebar }
})
export default class BlogLayout extends Vue {
    menuOpened: boolean = false
    showNavBar: boolean = true

    closeMenu(close: boolean) {
        this.menuOpened = close
    }
    toggleNavBar(value: boolean) {
        this.showNavBar = value
    }
    
    created() {
        this.showNavBar = this.$nuxt.$route.path === '/blog' ? true : false
    }
}
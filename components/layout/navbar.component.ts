import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component
export default class Navbar extends Vue {

    @Prop() public menuOpened!: boolean

    public closeMenuAndRoute(path: string) {
        this.$emit('closeMenu', false)
        this.$router.push({path: path})
        console.log(path)
    }
}
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  name: 'Home',
  head: {
    title: 'Elian Van Cutsem | Home',
  },
})
export default class HomePage extends Vue {
    showWhisper: boolean = false

    mounted () {
        this.showWhisper = true
    }
}
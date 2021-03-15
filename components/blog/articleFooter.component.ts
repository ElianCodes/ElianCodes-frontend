import { Vue, Component, Watch } from 'nuxt-property-decorator'
const numeral = require('numeral');

@Component
export default class ArticleFooter extends Vue {
    likes: number =  997
    tweetLink: string = "https://twitter.com/intent/tweet?text=Just read an article by @vancutsemelian. https://elian.codes" + this.$nuxt.$route.path

    public addLike(): void {
        this.likes = this.likes + 1
    }
    
    @Watch("likes")
    formatedLikes(): string {
        if(this.likes < 1000){
            return numeral(this.likes).format('0 a');
        } else {
            return numeral(this.likes).format('0.0 a');
        }
    }

}
import { IContentDocument } from '@nuxt/content/types/content'
import { Vue, Component, Watch } from 'nuxt-property-decorator'

@Component({
    name: 'sidebar',
    layout: 'blog'
})
export default class Sidebar extends Vue {
    rawArticles: IContentDocument | IContentDocument[] = []
    articles: IContentDocument | IContentDocument[] = []
    searchfield: string = ''

    @Watch('searchfield')
    filterArticles(): void {
        this.articles = this.rawArticles.filter((article: IContentDocument) => article.title.toLowerCase().includes(this.searchfield.toLowerCase()))
    }

    async fetch() {
        this.rawArticles = await this.$content('blog')
          .sortBy('createdAt', 'desc')
          .fetch()
        this.articles = this.rawArticles
    }

    formatDate(date: string): string {
        return new Date(date).toLocaleDateString('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
    }
}
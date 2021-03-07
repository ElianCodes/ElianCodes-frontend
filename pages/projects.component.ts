import { Vue, Component } from 'nuxt-property-decorator'
import Project from '../types/project'

@Component({
    layout: 'projects',
    head: {
        title: "Elian Van Cutsem's projects",
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'on this page you can find some of the projects I worked on.',
            },
        ],
    },
})
export default class Projects extends Vue {
    public currentPage: number = 1
    public projectList: Project[] = [
    {
        id: 9,
        title: 'scoutsjuventa.be',
        tag: 'Front-end & custom CSS',
        category: 'webdevelopment',
        img: 'https://i.imgur.com/M6MsjJy.png',
        link: 'https://www.scoutsjuventa.be',
    },
    {
        id: 8,
        title: 'degrill.be',
        tag: 'Webdesign & wordpress',
        category: 'webdevelopment',
        img: 'https://i.imgur.com/7ixAE5E.jpg',
        link: 'https://www.de-grill.be',
    },
    {
        id: 7,
        title: 'cambussa.be',
        tag: 'Front-end in wix',
        category: 'webdevelopment',
        img: 'https://i.imgur.com/EgL9lFc.jpeg',
        link: 'https://www.cambussa.be',
    },
    {
        id: 6,
        title: 'seidi-clothing.com',
        tag: 'Back-end in Symfony',
        category: 'Api development',
        img: 'https://i.imgur.com/MA0lOJi.jpeg',
        link: 'https://seidi-clothing.com/webshop/index.php',
    },
    {
        id: 5,
        title: 'jinsscoutsmerchtem.be',
        tag: 'Front-End in React',
        category: 'Webdevelopment',
        img: 'https://i.imgur.com/wHSkKUQ.jpg',
        link: 'https://www.jinsscoutsmerchtem.be',
    },
    {
        id: 4,
        title: 'stijnbogemans.be',
        tag: 'Webdesign & wordpress',
        category: 'Webdevelopment',
        img: 'https://i.imgur.com/Uhtabjz.jpg',
        link: 'https://www.stijnbogemans.be',
    },
    {
        id: 3,
        title: 'evaderidder.com',
        tag: 'Webdesign & wordpress',
        category: 'Webdevelopment',
        img: 'https://i.imgur.com/cVqUkmp.jpeg',
        link: 'https://www.evaderidder.com',
    },
    // { id: 2, tag: "Webdesign & wordpress", category: "Webdevelopment", img: "https://i.imgur.com/LEwsMh5.jpg", link: "https://www.kalathea.be" },
    {
        id: 1,
        title: 'lartgalerie.be',
        tag: 'Webdesign & wordpress',
        category: 'Webdevelopment',
        img: 'https://i.imgur.com/vc6oAlJ.jpg',
        link: 'https://www.lartgalerie.be',
    },
    // { id: 0, tag: "Webdesign & wordpress", category: "Webdevelopment", img: "https://i.imgur.com/8dQG2QY.jpg", link: "https://www.sportify.be" },
    ]
}
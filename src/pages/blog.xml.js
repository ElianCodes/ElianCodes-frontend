import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get(context) {
    return rss({
        title: 'Elian Van Cutsem',
        description: 'Programming and Frontend related articles and guides',
        stylesheet: false,
        items: await pagesGlobToRssItems(import.meta.glob('./blog/**/*.{md,mdx}')),
        customData: "<language>en-us</language>",
        canonicalUrl: "https://www.elian.codes",
        site: "https://www.elian.codes"
    });
}
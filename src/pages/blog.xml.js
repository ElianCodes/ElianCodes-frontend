import rss from '@astrojs/rss';

const posts = await import.meta.glob('./blog/**/*.md');

export const get = () => rss({
    title: 'Elian Van Cutsem',
    description: 'Programming and Frontend related articles and guides',
    stylesheet: false,
    items: posts,
    customData: `<language>en-us</language>`,
    canonicalUrl: "https://www.elian.codes"
});
<script>
    const toggleOverlay = () => {
        document.querySelector('main.technologies').classList.contains('overlay-hidden')
        ? addOverlay()
        : removeOverlay()
    }

    const removeOverlay = () => {
        document.querySelectorAll('.overlay-text').forEach(el => el.classList.add('hidden'))
        document.querySelectorAll('.overlay-text--no-absolute').forEach(el => el.classList.add('hidden'))
        document.querySelectorAll('.overlay').forEach(el => {
            el.classList.remove('overlay')
            el.classList.add('overlay-none')
        })
        document.querySelectorAll('.text-white').forEach(el => {
            el.classList.add('text-primary-green')
            el.classList.remove('text-white')
        })
        document.querySelector('main.technologies').classList.add('overlay-hidden')
        document.querySelector('button.overlay-btn').classList.add('overlay-hidden-btn')
    }
    
    const addOverlay = () => {
        document.querySelectorAll('.overlay-text').forEach(el => el.classList.remove('hidden'))
        document.querySelectorAll('.overlay-text--no-absolute').forEach(el => el.classList.remove('hidden'))
        document.querySelectorAll('.overlay-none').forEach(el => {
            el.classList.add('overlay')
            el.classList.remove('overlay-none')
        })
        document.querySelectorAll('.text-primary-green').forEach(el => {
            el.classList.remove('text-primary-green')
            el.classList.add('text-white')
        })
        document.querySelector('main.technologies').classList.remove('overlay-hidden')
        document.querySelector('button.overlay-btn').classList.remove('overlay-hidden-btn')
    }
</script>

<section class="overlay">
    <h2><a rel="nofollow noreferer" href="https://www.astro.build" target="_blank">Astro</a></h2>
    <p>
        Astro is an amazingly cool and fast frontend framework which focusses on shipping less JavaScript.
        It gives you the abilities to use frameworks like Svelte, Vue, Preact or others on top of Astro if you find yourself in a situation where you might need a front-end framework.
        That's not even the crazy part. If you want, you can even use all of them together which is an amazing concept!
        Even though it uses a front-end framework or components, Astro's goal is to reach a JavaScript-less website. 
        Out of the box if you only use <code>.astro</code> files, the final compiled website won't contain JS at all. 
        Still, Astro gives you the ability to hydrate the JS by using <code>client:load</code> in a component.
    </p>
    <h3><a rel="nofollow noreferer" href="https://www.svelte.dev" target="_blank">Svelte</a></h3>
    <p>
        As you can see by the ugly colors and overlays on this page, this component was written in Svelte, while the footer uses Preact and the header Vue.
        I don't really need them, but it's so cool to just be able to!
        Svelte is quite new to the front-end framework space, which makes it a great opportunity for me to learn and use it for a bit.
        I really like svelte this far because it feels closer to HTML than React or Preact do, which was also the main reason I used Vue a lot before.
    </p>
    <h3><a rel="nofollow noreferer" href="https://www.vuejs.org" target="_blank">Vue</a></h3>
    <p>
        Vue is one of the frameworks that really got me into webdevelopment, even before I learned React.
        Astro has a Vue renderer, which uses Vue 3 already.
        It integrates really nice with Astro, but I gotta be honest here and say that in combination with Astro, Svelte has my preference.
        On this website, the header uses Vue, it was easy to do since you can define and use computed functions, props and variables for things like the mobile menu buttons or navigation links.
        Little note: I still like things like <code>v-for, v-if</code> and such better then the Svelte approach, but I don't like the root element thing which makes your website so divvie. 
    </p>
    <h3><a rel="nofollow noreferer" href="https://www.preactjs.com" target="_blank">Preact</a></h3>
    <p>
        The footer of the website is written in Preact, not because it uses something really specific, but because I wanted to try it out.
        Preact came out of the box with the Astro example that I chose to begin with.
        I really like that you're able to use React/Preact native features like <code>useEffect</code> and such.
        On this website I used Preact in combination with TypeScript to load in the changing colors and initialize the Animation library on page-enter.
    </p>
    <h2><a rel="nofollow noreferer" href="https://www.tailwindcss.com" target="_blank">TailwindCSS</a></h2>
    <p>
        TailwindCSS has really become my go-to of CSS-frameworks. I first started using it in my first job <a href="https://www.vbridge.eu/" target="_blank" rel="noreferer noopener">@vBridge/a> where one of my first tasks was to move a Bootstrap site to TailwindCSS.
        At that time I really used TailwindCSS like a noob and didn't even know about the existence of <code>@apply</code> classes.
        Now that I have somewhat more experience using Tailwind, I feel like I have become pretty fast and maintainable at it, the last one there is really key, in combo with Sass it's even more stunning.
        Using TailwindCSS with astro is actually really easy. It's nothing more than installing the packages and adding it to the config and you're done.
    </p>
    <h3><a rel="nofollow noreferer" href="https://www.sass-lang.com" target="_blank">Sass</a></h3>
    <p>
        Setting up TailwindCSS with Sass can be a PITA, mostly you have to use PostCSS, but in the case of Astro, it's just not even an extra config.
        You just require the file and Astro handles the rest. Until now it worked like a charm for me, even the nesting works fine without any extra configuration.
        Since rebuilding this site in Astro, I also started using semantic CSS classes, which I mostly didn't do before. It makes using <code>@apply</code> classes so easy and fast!
    </p>

    <p>
        Yeah I know this page is ugly and looks like it's 1990, but it's mainly built to show of the different frameworks and components.<br/>
        If you'd like to see this page without it's uglyness, there is a toggle-overlay-off button 😊.
    </p>
    <button class="overlay-btn" on:click={toggleOverlay}>Remove overlays</button>
    <p class="overlay-text"><a rel="nofollow noreferer" href="https://www.svelte.dev" target="_blank">Svelte</a></p>
</section>
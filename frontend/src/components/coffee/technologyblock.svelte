<script>
import appImg from '../../assets/img/coffee/eliandotcoffeeapp.png'
</script>

<section class="block-technologies">
    <div class="relative mt-20">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div class="relative sm:py-16 lg:py-0">
                <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                    <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                        <img class="absolute inset-0 h-full w-full object-contain" src={appImg} alt="showing the login on the mobile app version">
                    </div>
                </div>
            </div>
            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <!-- Content area -->
                <div class="pt-12 prose prose-green sm:pt-16 lg:pt-20">
                    <h3 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                        The technologies that made it possible
                    </h3>
                    <div class="mt-6 text-gray-500 space-y-6">
                        <p class="text-lg">
                            When I first started thinking about the project in it's final form, I started by using <a href="https://reactnative.dev" target="_blank" rel="noreferer noopener">React Native</a> as the framework that should make it possible.
                            I did a lot of research about using React Native with <a href="https://tailwindcss.com" target="_blank" rel="noreferer noopener">TailwindCSS</a> and deploying it on the web as well.
                            Both of these things were possible and a cool thing to play with, but not that easy and maintainable, so I started looking for alternatives.
                        </p>
                        <p class="text-base leading-7">
                            One of the blockers for me, was that I didn't want to build a native UI with basic components, taken from a library.
                            So at first, <a href="https://ionicframework.com/" target="_blank" rel="noreferer noopener">Ionic</a>, <a href="https://dotnet.microsoft.com/apps/xamarin" target="_blank" rel="noreferer noopener">Xamarin</a> and <a href="https://flutter.dev" target="_blank" rel="noreferer noopener">Flutter</a> fell away. I quickly then realized that I wasn't actually looking to build an app, but I wanted to build a website, that was downloadable and runnable on smartphones.
                            Somewhat later I discovered the <a href="https://nuxtjs.org" target="_blank" rel="noreferer noopener">Nuxt</a> / <a href="https://capacitorjs.com/" target="_blank" rel="noreferer noopener">Capacitor</a> combo, it was love on first site!						
                        </p>
                        <p class="text-base leading-7">
                            Using <a href="https://nuxtjs.org" target="_blank" rel="noreferer noopener">Nuxt</a> was ideal, since I could use <a href="https://vuejs.org" target="_blank" rel="noreferer noopener">VueJS</a> and native web languages to build the main application and later package it into a mobile application.
                            So I built the website using <a href="https://nuxtjs.org" target="_blank" rel="noreferer noopener">Nuxt</a>, <a href="https://capacitorjs.com/" target="_blank" rel="noreferer noopener">Capacitor</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noreferer noopener">TailwindCSS</a> and an API written in <a href="https://nodejs.org/" target="_blank" rel="noreferer noopener">NodeJS</a> and <a href="https://expressjs.com/" target="_blank" rel="noreferer noopener">ExpressJS</a>.
                            Now that I knew how to build the front-end, I still had some issues in the back-end. Never before had I used <a href="https://nodejs.org/" target="_blank" rel="noreferer noopener">NodeJS</a>/<a href="https://expressjs.com/" target="_blank" rel="noreferer noopener">Express</a> with something else as a database then <a href="https://mongodb.com/" target="_blank" rel="noreferer noopener">MongoDB</a>.
                            I was up for the challenge and searched around for a good OSRM usable with <a href="https://mysql.com/" target="_blank" rel="noreferer noopener">MySQL</a>, since that was the database of my choice.						
                        </p>
                        <p class="text-base leading-7">
                            <a href="https://sequelizejs.com/" target="_blank" rel="noreferer noopener">Sequelize</a> instantly got my attention and I started playing around with it. I must say that it (almost) perfectly filled all my needs.
                            Although I think that if I had to do the API over, I would build it in something like <a href="https://dotnet.com/" target="_blank" rel="noreferer noopener">.NET</a> or <a href="https://php.net/" target="_blank" rel="noreferer noopener">PHP</a>/<a href="https://laravel.com/" target="_blank" rel="noreferer noopener">Laravel</a> as API, but at the time I also took overall cost into consideration.
                            Since I wanted to have a full working MVP by the date of the deadline I wanted to deploy using the cloud (<a href="https://cloud.google.com/" target="_blank" rel="noreferer noopener">Google Cloud</a> by choice), which isn't always cheap.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
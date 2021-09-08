<script>

</script>

<main class="coffee">
	<article>
    <h2>Elian.Coffee</h2>
		<h3>What is Elian.Coffee</h3>
		<p>
			Elian.Coffee (ElianDotCoffee) is a project I originally created as a schoolproject with Raf Coffee.<br/>
			It's a platform to organize and digitalize cuppings (coffee tastings) and provide analytics and feedback to the manufacterer.
		</p>
		<h3>The origin of Elian.Coffee</h3>
		<p>
			Elian.Coffee was originally an idea that sparked from a school assignment.
			While I was studying at Odisee University of Applied Sciences, we got an assignment for the subject "Web & Mobile Development".
			The assignment was about creating a mobile app or PWA in which you had to use a variety of technologies.
		</p>
		<p>
			Since my first year, I had already made a couple little projects about coffee, since it's one of the things I'm passionate about, and this time I was thinking in the same direction.
			The original idea was to build a social platform with a focus on sharing where you're drinking your coffee and give them a rating.
			Think of it as Untappd, but for coffee instead of beer.
		</p>
		<p>
			When I pitched the idea to my proffessors, they liked the idea, but also told me that they knew someone from the coffee-scene.
			When they asked if I wanted them to approach him and pitch the idea, I was very enthusiastic and immediatly said yes!
			Some weeks lated we meeted and talked about what the project could be, Raf had another idea about a platform in which cuppers and coffee manufacterers could organize cuppings (tastings).
		</p>
		<p>
			After I took some time to think about the project and how I could realize it, I decided that Raf's project idea actually was a lot better.
			Not only was it something new and exciting, it also was something usable.
			Believe me, after making a lot of school projects and deleting them afterwards, it gets frustrating.<br/>
			So here we go, I started coding the project!
		</p>
		<h3>The technologies that made it possible</h3>
		<p>
			When I first started thinking about the project in it's final form, I started by using Reeact Native as the framework that should make it possible.
			I did a lot of research about using React Native with TailwindCSS and deploying it on the web as well.
			Both of these things were possible and a cool thing to play with, but not that easy and maintainable, so I started looking for alternatives.
		</p>
		<p>
			One of the blockers for me, was that I didn't want to build a native UI with basic components, taken from a library.
			So at first, Ionic, Xamarin and Flutter fell away. I quickly then realized that I wasn't actually looking to build an app, but I wanted to build a website, that was downloadable and runnable on smartphones.
			Somewhat later I discovered the Nuxt / Capacitor combo, it was love on first site!
		</p>
		<p>
			Using Nuxt was ideal, since I could use VueJS and native web languages to build the main application and later package it into a mobile application.
			So I built the website using Nuxt, Capacitor, TailwindCSS and an API written in NodeJS and ExpressJS.
			Now that I knew how to build the front-end, I still had some issues in the back-end. Never before had I used NodeJS/ExpressJS with something else as a database then MongoDB.
			I was up for the challenge and searched around for a good OSRM usable with MySQL, since that was the database of my choice.
		</p>
		<p>
			Sequelize instantly got my attention and I started playing around with it. I must say that it (almost) perfectly filled all my needs.
			Although I think that if I had to do the API over, I would build it in something like .NET or PHP/Laravel as API, but at the time I also took overall cost into consideration.
			Since I wanted to have a full working MVP by the date of the deadline I wanted to deploy using the cloud (Google Cloud by choice), which isn't always cheap.
		</p>
		<h3>Deploying the application</h3>
		<p>
			As I said, I wanted to deploy the application using the cloud, since that really was something I hadn't do before and it sparked my interest.
			I did research, wrote Dockerfiles and buildscripts and really liked the full process. I learned a lot about building applications front-to-back and deployments.
			Now (some months later), I work at a cloud-native company called vBridge and I'm really into cloud-native development and the cloud as a whole (still as a developer, not as devOps or something).
		</p>
	</article>
</main>
---
title: 🎤 Less JavaScript, Faster Website
pubDate: 10/14/2022 12:00
author: "Elian Van Cutsem"
tags:
  - Javascript
  - Astro
  - Talk
imgUrl: https://i.imgur.com/zHKeWzx.jpg
description: 14th of October, I gave a lightning talk at React Brussels. This blog post contains my slides as well as some extra accompanying speaker notes.
layout: '../../layouts/BlogPost.astro'
---

# Less JavaScript, Faster Website - Astro

14th of October, I gave a lightning talk at [React Brussels](<https://www.react.brussels>). This blog post contains my slides as well as some extra accompanying speaker notes.

Keep in mind that this was a lightning talk between 4 and 10 minutes long.

*Last updated: 10/14/2022 12:00*

## The Slides

Thanks for taking an interest in the slides!

So, I'm Elian, a software engineer at [vBridge](<https://www.vbridge.eu>) in Belgium 🇧🇪.

I’m an Ambassador for [Astro](<https://astro.build>)

![Slide 1](https://i.imgur.com/PSFZ6ru.jpg)

So what is [Astro](<https://astro.build>)?

![Slide 2](https://i.imgur.com/Rj5G4c9.jpg)

Astro is a lightning fast framework!

![Slide 3](https://i.imgur.com/PDptO6U.jpg)

Even better, it’s a blazing fast framework

![Slide 4](https://i.imgur.com/ftYMOuw.jpg)

Or even a primeagen fast framework

![Slide 5](https://i.imgur.com/FASSntZ.jpg)

Or just simply Astronomically fast!

![Slide 6](https://i.imgur.com/GwWJxTr.jpg)

So; Why was I talking about a different Framework than React at React Brussels?

It's because Astro loves React right!

![Slide 7](https://i.imgur.com/rmljHjL.jpg)

Astro is based on an island component design architecture, what does this mean?

![Slide 8](https://i.imgur.com/WXjjnME.jpg)

Well, Astro doesn’t only love React, it’s a bring your own framework to the party kinda framework!

![Slide 9](https://i.imgur.com/27LyhTp.jpg)

One of the amazing things about Astro is that it can be experienced right now in your browser by heading to [astro.new](http://astro.new) & trying it out! Right there in your browser!

You’ll see that we do have templates for all of your favourite frameworks; including React, Preact, Vue, svelte and so on

![Slide 10](https://i.imgur.com/bt2MTkk.jpg)

Astro also has a lot of official and community driven integrations. All of them are documented and collected on [the Astro website](<https://astro.build>)!

The React integration is right there on the Astro integrations & Frameworks tab

Let’s take a look at using React in Astro in a short demo:

![Slide 11](https://i.imgur.com/CuoMNcy.jpg)

So let’s pop in our terminal here and setup a new astro project by using our favourite node package manager

I'll use `yarn create astro`

Astro will ask us what kind of project, we’d like, I’ll choose an empty one, since I want to show of how easy this is.

Astro support TypeScript, so it will ask us if we want to use that for our project.

That’s how easy it is to set up a new project with astro

![Slide 12](https://i.imgur.com/P8XhZ0w.jpg)

Let’s take a closer look at writing and using a React Component in Astro

![Slide 13](https://i.imgur.com/46J8CZk.jpg)

let’s add a very simple React counter component that you’ve all probably used before. A basic number and two buttons, one decreasing the value and one increasing the value

Let’s add some HTML in our `index.astro` `ile.

Let’s add some basic styling in the frontmatter of our Astro page

And import our newly created Counter component in there

and add it on the page.

If we now build our Astro project and preview it!
We’ll see the imported React Counter component on the page

![Slide 14](https://i.imgur.com/RpMW7Fm.jpg)

Okay, so a lot of this probably feels very familiar for you guys that have used React before, so what’s the difference?
Astro ships no JavaScript at all by default. Although components might be written in JavaScript.

Ofcourse, if you’ve got no JavaScript, you’ve got no interactivity!
But what if we need to make a component interactive?

![Slide 15](https://i.imgur.com/B48IiTf.jpg)

That is where partial hydration comes in!

![Slide 16](https://i.imgur.com/GDg5Lnh.jpg)

So I hear you thinking what the fuck is partial hydration

Well, here is the perfect meme to understand it;

![Slide 17](https://i.imgur.com/sydMRNl.jpg)

If we don’t water / hydrate our plant enough. The plant will feel very sad

If we hydrate too much; our plant will drown. This is the same for webapplications. We will be drowned in technical debt, bundle size and complexity

Let’s take a deeper look into this

![Slide 18](https://i.imgur.com/vrCYJGl.jpg)

Imagine we have this page. All of those components will require JavaScript to properly render. Even though some of them, like the footer are completely static and don’t require interactivity.

![Slide 19](https://i.imgur.com/PkO5AfL.jpg)

Actually, we want something more like this; Where we just select the components we want to be interactive and ship JavaScript to them.

![Slide 20](https://i.imgur.com/wrRNVpD.jpg)

Astro makes this possible by using the client: directive.

![Slide 21](https://i.imgur.com/SpfB8ZO.jpg)

Using the client directive, we can choose which components should use JavaScript, but we also have flexibility to choose when or how the component should become interactive.

![Slide 22](https://i.imgur.com/tuYGjBb.jpg)

We have a couple of options for hydration, let’s take a look at them!

![Slide 23](https://i.imgur.com/RUyK0E7.jpg)

Next we have the `client:load` directive which will just start hydrating the component as soon as the initial DOM content is loaded.

So we could opt for the `client:idle` directive, which will start importing the component JavaScript as soon as the main browser thread is free

![Slide 24](https://i.imgur.com/zj1iaoP.jpg)

Now let's also take a look at how to use this in our code and what the effect is on our result.

![Slide 25](https://i.imgur.com/k4UYwIw.jpg)

There is also `client:visible` which only will start importing the JavaScript as soon as the component enters the viewport

There is also a `client:media` directive which obviously just starts hydrating as soon as the given media query is met.

![Slide 26](https://i.imgur.com/nQrN1MQ.jpg)

So let’s hydrate our component here using `client:visible` and see what that means for our end result.

![Slide 27](https://i.imgur.com/qu0065R.jpg)

Ofcourse, Astro is a lot more than just deciding if we should hydrate a component or not!

![Slide 28](https://i.imgur.com/xYF9WAY.jpg)

Astro also supports

Server Side generation, Server Side Rendering, Using file-based routing.

It has a great Markdown and MDX story

Deploying to the edge with tools like Vercel Edge Functions. Even other runtimes, like Deno.

But also there are native integrations with popular packages, like Tailwind and Partytown

![Slide 29](https://i.imgur.com/5FhjhV4.jpg)

So, not only is Astro an amazing framework, it's also driven by a beautiful community, so come chat with us on discord!

I've also put some links in here that can guide you on your journey in Astro!

![Slide 30](https://i.imgur.com/7alPlqr.jpg)

If you liked this talk and want the slides, there already available on my website!

That’s it for me!

## Thanks

Huge thanks you to Ben & Aymen for organising this talk & asking me! 🙏

Big thanks for everyone helping me out and listening to my talk! 🙏

Special thanks to Fuzzy for helping me out finishing my slides! 🙏🐻

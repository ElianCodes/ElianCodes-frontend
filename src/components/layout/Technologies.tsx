interface Technology {
  name: string
  link: string
}

const Technologies = () => {
  const technologies: Technology[] = [
    {
      name: "Sass",
      link: "https://sass-lang.com"
    },
    {
      name: "Google Cloud",
      link: "https://cloud.google.com"
    },
    {
      name: "firebase",
      link: "https://firebase.com"
    },
    {
      name: "Astro",
      link: "https://astro.build/"
    },
    {
      name: "TailwindCSS",
      link: "https://tailwindcss.com"
    }
  ]
  const technology = technologies[(Math.floor(Math.random() * technologies.length))]

  return (
    <span>Website built with <a class="use-color transition-all ease-in-out duration-300" title={`go to the ${technology.name}`} target="_blank" href={technology.link}>{technology.name}</a> & ☕️</span>
  )
}

export default Technologies;
import { createEffect, createSignal } from "solid-js";

const Technologies = ({ technologies }) => {
  const [technology, setTechnology] = createSignal({ name: null, link: null});

  createEffect(() => {
    setTechnology(technologies[(Math.floor(Math.random() * technologies.length))]);
  }, 0)

  return (
    <span>Website built with <a class="use-color" title={`go to the ${technology().name}`} target="_blank" href={technology().link}>{technology().name}</a> & ☕️</span>
  )
}

export default Technologies;
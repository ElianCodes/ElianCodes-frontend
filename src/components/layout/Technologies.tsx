const Technologies = ({ technology }) => {
  return (
    <span>Website built with <a class="use-color transition-all ease-in-out duration-300" title={`go to the ${technology.name}`} rel="noreferrer" target="_blank" href={technology.link}>{technology.name}</a> & ☕️</span>
  )
}

export default Technologies;
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'preact/hooks';
import { init } from './GetColors';

const initAnimation = () => {
  AOS.init({
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  init();
}

export default function DefaultFooter({ overlay, linkColor, slug }) {
    const [technologies, setTechnologies] = useState([]);
    const getTechnologies = async (): Promise<void> => {
      const getTechnologies: any[] = await fetch('https://api.elian.codes/technologies').then(res => res.json());
      setTechnologies(getTechnologies.map(technology => technology.name))
    }
    useEffect(() => {
      initAnimation()
      getTechnologies()
    }, [])
    return (
      <footer class={overlay ? 'overlay' : ''}>
        <p>
          Built with <a href="/technologies/" class={ linkColor ? linkColor : "use-color"}>{technologies[(Math.floor(Math.random() * technologies.length))]}</a> &amp; <a href="/coffee/">☕</a>
        </p>
        { overlay ? (
            <p class="overlay-text"><a rel="nofollow noreferer" href="https://www.preactjs.com" target="_blank">Preact</a></p>
        ) : null }
      </footer>
    );
  }
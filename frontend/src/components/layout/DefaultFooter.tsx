  
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'preact/hooks';
import { init } from './GetColors';

const initAnimation = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  init();
}

export default function DefaultFooter({ overlay, linkColor, slug }) {
    const technologies = ['Astro', 'TailwindCSS']
    useEffect(() => {
      initAnimation()
    }, [])
    return (
      <footer class={overlay ? 'overlay' : ''}>
        <p>Built with <a href="/technologies/" class={ linkColor ? linkColor : "use-color"}>Astro</a>, <a href="/technologies/" class={ linkColor ? linkColor : "use-color"}>TailwindCSS</a> &amp; { slug === 'coffee' ? (<>🍵</>) : (<a href="/coffee/">☕</a>) }</p>
        { overlay ? (<p class="overlay-text"><a rel="nofollow noreferer" href="https://www.preactjs.com" target="_blank">Preact</a></p>) : null }
      </footer>
    );
  }
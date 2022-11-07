import { createEffect, createSignal } from "solid-js";

const DarkMode = ({ activateBackground }) => {
  const [theme, setTheme] = createSignal<string>('light');

  const updateDom = (mode: string) => {
    if (mode === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setTheme(mode)
    localStorage.setItem('theme', mode);
  }

  createEffect(() => {
    const mode = (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) ? localStorage.getItem('theme') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    updateDom(mode)
  })

  return (
    <div class="fixed bottom-10 right-12 text-white hidden md:inline">
      <div class={activateBackground ? "bg-color p-2 -m-2 rounded-full flex justify-center items-center" : ""}>
        { theme() === 'light' ? (
          <button onClick={() => updateDom('dark')} type="button" value="turn on darkmode" title="turn on darkmode">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          </button>) : (
          <button onClick={() => updateDom('light')} type="button" value="turn off darkmode" title="turn off darkmode" class="text-black">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </button> )
        }
      </div>
  </div>
  )
}

export default DarkMode;
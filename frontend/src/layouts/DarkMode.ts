// set this to trigger immediatly
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const darkModeActive = () => { return root.classList.contains('dark') }
    
    document.querySelectorAll('button.toggleMode').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault()
            root.classList.add('transition-colors', 'ease-in-out', 'duration-500');
            darkModeActive() ? setLightMode() : setDarkMode()
            setTimeout(() => {
                root.classList.remove('transition-colors', 'ease-in-out', 'duration-500')
            }, 500)
        })
    })

    const setDarkMode = () => {
        localStorage.setItem('theme', 'dark')
        root.classList.add('dark')
    }

    const setLightMode = () => {
        localStorage.setItem('theme', 'light')
        root.classList.remove('dark')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    
    const darkModeActive = () => { return root.classList.contains('dark') }
    
    document.querySelectorAll('button.toggleMode').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault()
            darkModeActive() ? root.classList.remove('dark') : root.classList.add('dark')
        })
    })
})

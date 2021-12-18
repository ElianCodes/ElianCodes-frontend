document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('eyeDropper')
    if (!window.EyeDropper) {
        button.classList.add('hidden')
    } else {
        button.addEventListener('click', e => {
            e.preventDefault()
            const eyeDropper = new EyeDropper();
                eyeDropper.open().then(result => {
                    const rgbValue = result.sRGBHex
                    document.documentElement.style.setProperty('--custom-color', rgbValue)
                    localStorage.setItem('color', rgbValue)
                }).catch(e => {
                    console.log(e)
                });
        })
    }
})
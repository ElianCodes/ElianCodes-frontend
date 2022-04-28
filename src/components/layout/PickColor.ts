document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('eyeDropper')
    const clearColor = document.getElementById('clearColor')
    if (!window.EyeDropper) {
        colorPicker.classList.add('hidden')
    } else {
        colorPicker.addEventListener('click', e => {
            e.preventDefault()
            const eyeDropper = new EyeDropper();
                eyeDropper.open().then(result => {
                    const rgbValue = result.sRGBHex
                    document.documentElement.style.setProperty('--custom-color', rgbValue)
                    localStorage.setItem('color', rgbValue)
                    clearColor.classList.remove('hidden')
                }).catch(e => {
                    console.log(e)
                });
        })
        clearColor.addEventListener('click', e => {
            e.preventDefault()
            localStorage.removeItem('color')
            clearColor.classList.add('hidden')
            document.dispatchEvent(new Event('getRandomColor'))
        })
    }
})
import { onMount } from "solid-js";
import { createSignal } from "solid-js";

const PickColor = () => {
  const [canColorBePicked, setColorCanBePicked] = createSignal(false)
  const [customColorActive, setCustomColorActive] = createSignal(false)

  onMount(() => {
    if (typeof window !== "undefined") {
      setColorCanBePicked(true);
    }
  })

  const pickColor = () => {
    const eyeDropper = new EyeDropper();
      eyeDropper.open().then(result => {
          const rgbValue = result.sRGBHex
          document.documentElement.style.setProperty('--custom-color', rgbValue)
          localStorage.setItem('color', rgbValue)
          setCustomColorActive(true)
        }).catch(e => {
          console.log(e)
      });
  }

  const removeColor = () => {
    localStorage.removeItem('color')
    setCustomColorActive(false)
    document.dispatchEvent(new Event('getRandomColor'))
  }

  return (
    <>
    { canColorBePicked() ? (
        customColorActive() ? (
          <button onClick={removeColor} title="Remove custom color" type="button" id="clearColor">🗑</button>
        ) : (
          <button onClick={pickColor} title="Pick a new color" type="button" id="eyeDropper">🔍</button>
        )
    ) : null 
    }
    </>
  )
}

export default PickColor;
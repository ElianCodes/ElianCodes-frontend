import { createSignal, createEffect } from "solid-js";

const PickColor = () => {
  const [canColorBePicked, setColorCanBePicked] = createSignal(false);
  const [customColorActive, setCustomColorActive] = createSignal(false);

  createEffect(() => {
    setTimeout(() => {
    const color = document.documentElement.style.getPropertyValue('--arc-palette-foregroundPrimary');
      if (color !== '') {
        setColorCanBePicked(false);
      } else if (typeof window !== "undefined") {
        setColorCanBePicked(true);
      }
    }, 500)
  })

  const pickColor = () => {
    const eyeDropper = new EyeDropper();
      eyeDropper.open().then((result) => {
          const rgbValue = result.sRGBHex;
          document.documentElement.style.setProperty('--custom-color', rgbValue);
          localStorage.setItem('color', rgbValue);
          setCustomColorActive(true);
        }).catch((e) => {
          console.error(e);
      });
  };

  const removeColor = () => {
    localStorage.removeItem('color');
    setCustomColorActive(false);
    document.dispatchEvent(new Event('getRandomColor'));
  };

  return (
    <>
    { canColorBePicked() ? (
        customColorActive() ? (
          <button onClick={removeColor} class="transition-all duration-300 ease-in-out" title="Remove custom color" type="button">🗑</button>
        ) : (
          <button onClick={pickColor} class="transition-all duration-300 ease-in-out" title="Pick a new color" type="button">🔍</button>
        )
    ) : null 
    }
    </>
  );
};

export default PickColor;
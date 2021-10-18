import { init } from './GetColors';

export const getCookie = (cname: string): string => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const setCookie = (cname: string, cvalue: string): void => {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

const setTheme = async (sync: boolean): void => {
    const cookie = await getCookie('theme')
    switch(cookie){
        case 'system':
            if (window.matchMedia('(prefers-color-scheme: dark)').matches){
                setDarkmode()
            } else {
                setLightmode()
            }
            break;

        case 'dark':
            setDarkmode()
            break;

        case 'light':
            setLightmode()
            break;

        default:
            setCookie('theme', 'system')
    }
    if (sync == true) {
        init()
    }
}

const setDarkmode = (): void => {
    document.documentElement.classList.add('dark');
}

const setLightmode = (): void => {
    document.documentElement.classList.remove('dark');
}

// Initialise mode on first page enter
setTheme(false);

// Listen to events
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("changedMode", (): void => setTheme(true));
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (): void => {
        setTheme(true)
    });
})
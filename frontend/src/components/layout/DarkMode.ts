import { init } from './GetColors';

const getCookie = (cname: string): string => {
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
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const setCookie = (cname: string, cvalue: string): void => {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

const setTheme = async (doInit: boolean) => {
    const cookie = await getCookie('theme')
    if (cookie.length == 0 && window.matchMedia('(prefers-color-scheme: dark)').matches){
        setCookie('theme', 'dark')
    } else if (getCookie('theme').length == 0) {
        setCookie('theme', 'light')
    }
    console.log(cookie)
    await document.querySelector('html').classList.add(cookie);
    if (doInit == true) {
        init()
    }
}
setTheme(false);
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("changedMode", () => setTheme(true));
})
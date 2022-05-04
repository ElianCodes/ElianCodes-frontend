let doINeedToShowCookiesBanner = false;

const getCookie = (cname: string): string => {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
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

const setCookie = (cname: string, cvalue: string) => {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const showCookies = (): void => {
    document.getElementById('cookieBanner').classList.remove('opacity-0', 'hidden')
}

const hideCookies = (): void => {
    document.getElementById('cookieBanner').classList.add('opacity-0')
    setTimeout((): void => {
        document.getElementById('cookieBanner').classList.add('hidden')
    }, 300)
}

const checkIfCookiesAreAccepted = (): void => {
    const acceptedCookies = getCookie("acceptedCookies")
    if(acceptedCookies == "acceptedFull" || acceptedCookies == "acceptedMinimal") {
        doINeedToShowCookiesBanner = false;
    } else {
        doINeedToShowCookiesBanner = true;
    }
}

checkIfCookiesAreAccepted()

document.addEventListener('DOMContentLoaded', (): void => {
    doINeedToShowCookiesBanner ? showCookies() : hideCookies()

    document.getElementById('acceptFullCookies').addEventListener('click', (): void => {
        hideCookies()
        setCookie("acceptedCookies", "acceptedFull")
    })
    
    document.getElementById('acceptMinimalCookies').addEventListener('click', (): void => {
        hideCookies()
        setCookie("acceptedCookies", "acceptedMinimal")
    })
    
    document.getElementById('closeCookies').addEventListener('click', (): void => {
        hideCookies()
        setCookie("acceptedCookies", "acceptedMinimal")
    })
})
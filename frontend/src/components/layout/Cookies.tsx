import { useEffect, useState } from 'preact/hooks';

export default function Cookies() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const getCookie = (): boolean => {
    let name="cookiesAccepted="
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        setAcceptedCookies(true);
        return true;
      }
    }
    return false;
  }
  const setCookie = () => {
    const date = new Date();
    date.setTime(+ date + (365 * 86400000));
    document.cookie = `cookiesAccepted=true;expires=${date.toUTCString()};path=/`;
    setAcceptedCookies(true);
  }
  const checkCookie = () => {
    if(getCookie() == true) {
      setAcceptedCookies(true);
    }
    setLoaded(true)
  }
  useEffect(() => {
    checkCookie()
  })
  return !acceptedCookies && loaded && (
      <section class="cookies" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div>
          <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white dark:bg-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
            <div class="sm:flex sm:items-start sm:justify-between">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center">
                <img src="/assets/img/cookies.png" class="w-64 h-64 lg:w-96 lg:h-96" />
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left sm:w-64">
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200" id="modal-title">
                  Will you eat my cookies?
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    Hello peeps, please click "Eat cookies", they're used for analytics and display relevant ads for you.<br/>
                    Oh wait... You can't click anywhere else. I guess this modal is irrelevant then. Just click it.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex justify-end">
              <button onClick={() => setCookie()} type="button" class="use-color-bg inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:w-auto sm:text-sm">
                Eat cookies
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}
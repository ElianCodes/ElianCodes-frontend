import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_API_KEY,
  authDomain: "eliancodes-1632771244788.firebaseapp.com",
  projectId: "eliancodes-1632771244788",
  storageBucket: "eliancodes-1632771244788.appspot.com",
  messagingSenderId: import.meta.env.PUBLIC_MSG_ID,
  appId: import.meta.env.PUBLIC_APP_ID,
  measurementId: import.meta.env.PUBLIC_GA_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);


const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.PUBLIC_CAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true
});
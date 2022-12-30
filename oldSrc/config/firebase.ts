import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCwwmH6eZRdM1sC5vsBwImBxe-KsF5VW5M",
  authDomain: "diagnostic-app-favaloro.firebaseapp.com",
  databaseURL: "https://diagnostic-app-favaloro-default-rtdb.firebaseio.com",
  projectId: "diagnostic-app-favaloro",
  storageBucket: "diagnostic-app-favaloro.appspot.com",
  messagingSenderId: "284833106617",
  appId: "1:284833106617:web:97093734225ebdba05e968",
  measurementId: "G-QE3CBSE5ES",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);

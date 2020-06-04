import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
  // apiKey: "AIzaSyCWFUrtuda0YyBH8gYIYrVPUin-4P1ic6w",
  // authDomain: "guess-me-426ec.firebaseapp.com",
  // databaseURL: "https://guess-me-426ec.firebaseio.com",
  // projectId: "guess-me-426ec",
  // storageBucket: "guess-me-426ec.appspot.com",
  // messagingSenderId: "613302270375",
  // appId: "1:613302270375:web:2631203aa0c7556af09e82",
  // measurementId: "G-Z4J5Z8V56E"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
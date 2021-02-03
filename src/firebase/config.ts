import * as firebase from "firebase";
import "firebase/auth";

let app: any;

const firebaseConfig = {
  apiKey: "AIzaSyB_A6RMXzSFhvHjdnDKwTfP8jFBv6jH8zc",
  authDomain: "imaginamos-1ba3f.firebaseapp.com",
  databaseURL: "https://imaginamos-1ba3f.firebaseio.com",
  projectId: "imaginamos-1ba3f",
  storageBucket: "imaginamos-1ba3f.appspot.com",
  messagingSenderId: "917779147631",
  appId: "1:917779147631:web:4906e0816fb317706a169a",
};

const emailPassword = firebase.auth.EmailAuthProvider.PROVIDER_ID;
const googleAuthProvider = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
const facebookAuthProvider = firebase.auth.FacebookAuthProvider.PROVIDER_ID;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore().collection("sellings");

export { app, emailPassword, googleAuthProvider, facebookAuthProvider, db };

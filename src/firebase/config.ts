import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB_A6RMXzSFhvHjdnDKwTfP8jFBv6jH8zc",
  authDomain: "imaginamos-1ba3f.firebaseapp.com",
  databaseURL: "https://imaginamos-1ba3f.firebaseio.com",
  projectId: "imaginamos-1ba3f",
  storageBucket: "imaginamos-1ba3f.appspot.com",
  messagingSenderId: "917779147631",
  appId: "1:917779147631:web:4906e0816fb317706a169a",
});

const emailPassword = firebase.auth.EmailAuthProvider.PROVIDER_ID;
const googleAuthProvider = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
const facebookAuthProvider = firebase.auth.FacebookAuthProvider.PROVIDER_ID;

export { app, emailPassword, googleAuthProvider, facebookAuthProvider };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDc3DMX9ULWANZAmxOmHh01W8gfYTidIT0",
    authDomain: "chat-app-71d67.firebaseapp.com",
    projectId: "chat-app-71d67",
    storageBucket: "chat-app-71d67.appspot.com",
    messagingSenderId: "662179451507",
    appId: "1:662179451507:web:986c1d588b63f5eb37d006",
  })
  .auth();

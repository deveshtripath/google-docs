import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-QA41b-i9ZOYBBFuzU-x6XhOZ-5BYf2o",
    authDomain: "signal-clone-build-49f5c.firebaseapp.com",
    projectId: "signal-clone-build-49f5c",
    storageBucket: "signal-clone-build-49f5c.appspot.com",
    messagingSenderId: "590215563792",
    appId: "1:590215563792:web:671cfaef18b5c0289b1895",
    measurementId: "G-ZGL88KXZTP"
  };


const app =!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db =app.firestore();

export { db };


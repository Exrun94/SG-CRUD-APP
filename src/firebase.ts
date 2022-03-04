import { initializeApp } from "firebase/app"
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDRryoq3HTmt6hNN4sQNk2Pug52KJLWKdY",
    authDomain: "crude-app-3ef78.firebaseapp.com",
    projectId: "crude-app-3ef78",
    storageBucket: "crude-app-3ef78.appspot.com",
    messagingSenderId: "257141066977",
    appId: "1:257141066977:web:16c0b50550eed048cd3ba0"
  };


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
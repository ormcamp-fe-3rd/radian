// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCVUm79EDOYiwhyowkwxRwecxXqXh97eek',
  authDomain: 'radian-e6681.firebaseapp.com',
  projectId: 'radian-e6681',
  storageBucket: 'radian-e6681.firebasestorage.app',
  messagingSenderId: '154063450754',
  appId: '1:154063450754:web:116050eb52ebd65d87fa9b',
  measurementId: 'G-WZZJ0VSFVF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

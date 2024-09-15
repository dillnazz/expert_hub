// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCIeEQYZ66ATz0I0IcCMtXZrxqKMHlyUqk",
  authDomain: "my-app-47526.firebaseapp.com",
  projectId: "my-app-47526",
  storageBucket: "my-app-47526.appspot.com",
  messagingSenderId: "919456136155",
  appId: "1:919456136155:web:3d99a72ecdefd8ef0285fe",
  measurementId: "G-0MTZ7RHH4P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

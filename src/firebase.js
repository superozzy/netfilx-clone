import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwTs6qaCzLHANTX41kS3VmSQyqfhkktGA",
  authDomain: "netflix-clone-9287e.firebaseapp.com",
  projectId: "netflix-clone-9287e",
  storageBucket: "netflix-clone-9287e.appspot.com",
  messagingSenderId: "531567845327",
  appId: "1:531567845327:web:1abb452b67918c186b3cba",
  measurementId: "G-GEY0BYYBYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

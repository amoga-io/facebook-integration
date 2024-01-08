// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuW7QQln4QkUKDzNuBuqyP2ypd6_iwsy0",
  authDomain: "fb-clone-yt-3a9a1.firebaseapp.com",
  projectId: "fb-clone-yt-3a9a1",
  storageBucket: "fb-clone-yt-3a9a1.appspot.com",
  messagingSenderId: "131614446763",
  appId: "1:131614446763:web:3a4987dd4c4c44fa8c13ee"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

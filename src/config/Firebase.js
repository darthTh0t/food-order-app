import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp_sUq-UaSO198xsRhLKCv8xsBWXwN4Bw",
  authDomain: "food-ordering-app-435f4.firebaseapp.com",
  projectId: "food-ordering-app-435f4",
  storageBucket: "food-ordering-app-435f4.appspot.com",
  messagingSenderId: "437206001150",
  appId: "1:437206001150:web:c449f19681fb459dee0caf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  FacebookAuthProvider 
} from "firebase/auth";

// 1. Paste your config object here (Get this from Firebase Console > Project Settings)
const firebaseConfig = {
  apiKey: "AIzaSyA7fG5Ho_Q_MxE9c_ZQnPgDSq3Xsi2usTA",
  authDomain: "uskill-482102.firebaseapp.com",
  projectId: "uskill-482102",
  storageBucket: "uskill-482102.firebasestorage.app",
  messagingSenderId: "41050204132",
  appId: "1:41050204132:web:4a29e3aa40869663fc09f1"
};

// 2. Initialize Firebase (Singleton pattern to avoid errors in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

// 3. Set up Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, githubProvider, facebookProvider };
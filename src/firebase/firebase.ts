import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKegLdHMVY35cB0Mhc2Wts7QHyetATKFM",
  authDomain: "leetclone-843c9.firebaseapp.com",
  projectId: "leetclone-843c9",
  storageBucket: "leetclone-843c9.firebasestorage.app",
  messagingSenderId: "285758893635",
  appId: "1:285758893635:web:76b6330739ccc958f16ef6",
  measurementId: "G-WT3DW63M6N"
};

// ✅ Fix: call getApps() as a function
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
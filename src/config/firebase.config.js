
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAT00nhz-2y2mKwO6FiSABsXnHHW4JkhHM",
  authDomain: "portfolio-e707f.firebaseapp.com",
  projectId: "portfolio-e707f",
  storageBucket: "portfolio-e707f.appspot.com",
  messagingSenderId: "844640431565",
  appId: "1:844640431565:web:481e18b6328b0aa87ee884"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db}
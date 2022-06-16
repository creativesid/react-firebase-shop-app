import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBl-QIwN4zqe7Mwif3TBYkVmVAGrOJK66o",
  authDomain: "reactbaseshop.firebaseapp.com",
  databaseURL: "https://reactbaseshop-default-rtdb.firebaseio.com",
  projectId: "reactbaseshop",
  storageBucket: "reactbaseshop.appspot.com",
  messagingSenderId: "498327081033",
  appId: "1:498327081033:web:80fe19fe3b69e83dadef98",
  measurementId: "G-N4NY0LCHM5",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

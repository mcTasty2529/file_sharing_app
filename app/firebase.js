import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAN2nRWea_3Ml2rk9otKOocxFm3IBo6jwk",
  authDomain: "filesharingsubodh.firebaseapp.com",
  projectId: "filesharingsubodh",
  storageBucket: "filesharingsubodh.appspot.com",
  messagingSenderId: "487436634081",
  appId: "1:487436634081:web:154d304292a01f190c34a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

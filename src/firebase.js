
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBZWtIdvXmcVvfnGjv6IHMz2MZaK8tSf2A",
  authDomain: "react-portfolio-ayushh.firebaseapp.com",
  projectId: "react-portfolio-ayushh",
  storageBucket: "react-portfolio-ayushh.appspot.com",
  messagingSenderId: "590382835988",
  appId: "1:590382835988:web:cead10668cf8c7b038ba01",
  measurementId: "G-XCPDGZSQZJ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 
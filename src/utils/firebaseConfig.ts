import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCKJJkaPb6TvvRunbmfF0YPqHItORs9Tu4",
  authDomain: "react-pokedex-d6225.firebaseapp.com",
  projectId: "react-pokedex-d6225",
  storageBucket: "react-pokedex-d6225.appspot.com",
  messagingSenderId: "292279419110",
  appId: "1:292279419110:web:16ccba928e85e642937b27",
  measurementId: "G-G5PZ5CLL45"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app)

export const usersRef = collection(firebaseDB, 'users')
export const pokemonListRef = collection(firebaseDB, "pokemonList")

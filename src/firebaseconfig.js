// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDdnxqjpz54m5hssCzrEd9iRg6_uStLEo8",
    authDomain: "supply-app-4f8d3.firebaseapp.com",
    projectId: "supply-app-4f8d3",
    storageBucket: "supply-app-4f8d3.firebasestorage.app",
    messagingSenderId: "532600954716",
    appId: "1:532600954716:web:0f8ee3ebb159ac1ae82b99",
    measurementId: "G-MZ9NGDZB19"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db };



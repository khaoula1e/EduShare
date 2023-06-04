import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBSZo4824a-jm60mkedYAEh7H_4VvMUTZ4",
  authDomain: "edushare-e089a.firebaseapp.com",
  projectId: "edushare-e089a",
  storageBucket: "edushare-e089a.appspot.com",
  messagingSenderId: "159174362163",
  appId: "1:159174362163:web:7b951c328a07099b8d0f46",
  measurementId: "G-QWPK6039EN"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
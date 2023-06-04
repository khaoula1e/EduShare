import React, { createContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { auth, database } from '../config/firebase';
import { getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(email, password)
        .then(() => {
          // Once the user creation has happened successfully, we can add the currentUser into firestore
          // with the appropriate details.
          database.collection('users').doc(auth().currentUser.uid)
            .set({
              fname: '',
              lname: '',
              email: email,
              createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
              userImg: null,
            })
            // Ensure we catch any errors at this stage to advise us if something does go wrong
            .catch(error => {
              console.log('Something went wrong with added user to firestore: ', error);
            })
        })
        // We need to catch the whole sign up process if it fails too.
        .catch(error => {
          console.log('Something went wrong with sign up: ', error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
  try {
    await signOut(auth);
    // Sign-out successful.
  } catch (e) {
    console.error(e);
  }
};
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

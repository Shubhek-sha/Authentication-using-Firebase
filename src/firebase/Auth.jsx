import {
  createUserWithEmailAndPassword as firebaseCreateUser,
  signInWithEmailAndPassword as firebaseSignIn,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "./firebase"; // Ensure firebase.js exports `auth`

// Sign up with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return firebaseCreateUser(auth, email, password);
};

// Sign in with email and password
export const doSignInWithEmailAndPassword = async (email, password) => {
  return firebaseSignIn(auth, email, password);
};

// Sign out
export const doSignOut = async () => {
  return firebaseSignOut(auth);
};

// Sign in with Google
const googleProvider = new GoogleAuthProvider();

export const doSignInWithGoogle = async () => {
  return signInWithPopup(auth, googleProvider);
};

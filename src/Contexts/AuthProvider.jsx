import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config.js";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in existing user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login With Google
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Log out user
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // if (currentUser?.email) {
      //   const userData = { email: currentUser.email };
      //   axios
      //     .post("https://career-code-server-rouge.vercel.app/", userData)
      //     .then((res) => {
      //       const token =res.data.token;
      //       localStorage.setItem('token', token)
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    loginWithGoogle,
    logout,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
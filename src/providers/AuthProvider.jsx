/* eslint-disable react/prop-types */
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const info = { createUser, signInUser };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

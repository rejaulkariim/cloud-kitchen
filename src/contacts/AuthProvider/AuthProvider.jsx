import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const providerLogin =(provider)=>{
    return signInWithPopup(auth, provider)
  }

  const createUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)

  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
    })

    return ()=>{
       return  unsubscribe()
    }
  },[])

  const authInfo = {user, loading, createUser, login, providerLogin };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

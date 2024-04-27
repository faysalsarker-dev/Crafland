/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup,GithubAuthProvider,updateProfile } from "firebase/auth";



export const ContextData = createContext(null)
const Context = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()




    const createuser=(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)

    }

    const login =(email,password)=>{
        setLoading(true)
     return  signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {
        setLoading(true);
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        
        })
       
    };



    // Google user
    const googleUser=()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const githubUser=()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)

    }
   
      //  Log Out 
      const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false)
            } else {
                setUser(null);
                setLoading(false)
            }
        });
    
        return () => {
            unsub();
        };
    }, [auth,user]); 
    



const data ={
    googleUser,
    createuser,
    setUser,
    user,
    profileUpdate,
    logOut,
    githubUser,
    login,
   loading,

}



    return (
        <ContextData.Provider value={data}>
            {children}
        </ContextData.Provider>
    );
};

export default Context;
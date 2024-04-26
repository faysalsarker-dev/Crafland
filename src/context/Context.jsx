/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup,GithubAuthProvider } from "firebase/auth";



export const ContextData = createContext(null)
const Context = ({ children }) => {
    const [user,setUser]=useState(null)

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()




    const createuser=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)

    }

    const login =(email,password)=>{
     return  signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {
        
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        
        })
       
    };



    // Google user
    const googleUser=()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const githubUser=()=>{
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
                console.log(user);
            } else {
                setUser(null);
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
    login
}



    return (
        <ContextData.Provider value={data}>
            {children}
        </ContextData.Provider>
    );
};

export default Context;
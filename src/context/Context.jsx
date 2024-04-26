/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from './../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const ContextData = createContext(null)

const auth = getAuth(app)


const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const GoogleProvider = new GoogleAuthProvider();
    const GithubeProvider = new GithubeProvider();


    //  create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // log out
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    };

   
    //  user profile name and photo
    const profileUpdate = (name, photo) => {
        setLoading(true);
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        
        })
       
    };

    // Google 
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    // Githube 
    const githubeLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GithubeProvider)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);

            } else {
                setLoading(false);
                setUser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);




    const info = {
        createUser,
        loading,
        setLoading,
        googleLogin,
        githubeLogin,
        logOut,
        user,
        profileUpdate
    }




    return (
        <ContextData.Provider value={info}>
            {children}
        </ContextData.Provider>
    );
};

export default Context;
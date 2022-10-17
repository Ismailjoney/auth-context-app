import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.init';
 
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    //question 1: useState kno declear korce ?
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const singInUser = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const singOutUser =() => {
        return signOut(auth)
    }
    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //question 2:onAuthStateChanged kno use kora hoi r useEffect er vitore kno use kora hoi ?? 
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
           // unSubscribe k kno call kora holo ??
            unSubscribe();
        }
    },[])

    const authInfo = {user,loading, createUser, singInUser, singOutUser, singInWithGoogle }
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.init';
 
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    //question 1: useState kno declear korce ?
    const [user,setUser] = useState({displayname: 'akashhh'})
    
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const singInUser = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {user, createUser, singInUser }
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
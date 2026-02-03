import React, { useState } from 'react';
import { AuthContextApi } from './AuthContex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebage';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // sign up 
    const handelSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signin
    const handelSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        user,
        setUser,
        handelSignUp,
        handelSignIn,
    }
    return (
        <AuthContextApi.Provider value={userInfo}>
            {children}
        </AuthContextApi.Provider>
    );
};

export default AuthProvider;
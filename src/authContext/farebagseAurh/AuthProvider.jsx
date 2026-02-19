import React, { useEffect, useState } from 'react';
import { AuthContextApi } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebage';
import Loding from '../../component/Loding';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)
    const provider = new GoogleAuthProvider();

    // sign up 
    const handelSignUp = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signin
    const handelSignIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out 
    const handelSignOut = () => {
        setLoding(true)
        return signOut(auth)
    }
    // lofin wirh google
    const handelSignwithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    // update user profile in firebase
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // courrent user
    useEffect(() => {
        const onscript = onAuthStateChanged(auth, (current) => {
            setUser(current)
            setLoding(false)
        })
        return () => {
            onscript()
        }
    }, [])
    const userInfo = {
        user,
        loding,
        setUser,
        handelSignUp,
        handelSignIn,
        handelSignOut,
        updateUserProfile,
        handelSignwithGoogle,
    }

    if (loding) {
        return <Loding></Loding>
    }
    return (
        <AuthContextApi.Provider value={userInfo}>
            {children}
        </AuthContextApi.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    // create user with emai and password
    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with google
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        localStorage.removeItem('token');
        return signOut(auth);
    }
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    // state change monitor
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });

        return () => {
            return unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        setLoading,
        register,
        login,
        logOut,
        updateUser,
        googleLogin
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
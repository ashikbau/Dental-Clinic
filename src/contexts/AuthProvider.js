import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile} from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    

    const providerGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider );
    }
    const providerTwitterLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider );
    }
    const providerGitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,  gitHubProvider );
    }

    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    const updateUser = (name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          });
    }
    // const updateUser = (userInfo) =>{
    //     return updateProfile(auth.currentUser, userInfo);
    // }

    //   3. Email Verify
  const verifyEmail = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser)
  }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

     //7. Forget Password
  const resetPassword = email => {
    console.log('email from',email)
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
          
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    },[])



    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        updateUser,
        providerGoogleLogin,
        loading,
        verifyEmail,
        setLoading,
        resetPassword,
        providerTwitterLogin,
        providerGitHubLogin
     
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
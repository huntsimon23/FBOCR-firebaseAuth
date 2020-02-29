import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";

function Auth() {
    return (
        <div>
            <button 
            className = "button btn-primary"
            onClick= {() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}>
          Sign In with Google
            </button>
        </div>
    )
};

export default Auth;
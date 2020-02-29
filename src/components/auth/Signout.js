import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";

function Signout() {
    return (
        <div>
            <button className = "button btn-primary"
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>
        </div>
    )
};

export default Signout;
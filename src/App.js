import * as React from "react";
import { render } from "react-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { config } from "./config";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode
} from "@react-firebase/database";
import Header from "./components/header/Header";
import Auth from "./components/auth/Auth";
import Signout from "./components/auth/Signout";
import Button from "./components/linktree/Button"
import './App.css';
import Linktree from "./components/linktree/Linktree";


function App() {
  return (
    <div className="App">
      <FirebaseAuthProvider {...config} firebase={firebase}>
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <Header />
      <div>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            if (!isSignedIn) {
              return <Auth />
            };
            if (isSignedIn) {
              return <div>
                Welcome {user.displayName}!
              </div>
            }
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              return (
              <div>
                You are authenticated.
                <Signout />
                <FirebaseDatabaseNode
path="/"
orderByKey
>
{buttons => {
        return (
         buttons.map(button => {
        <React.Fragment>
         <Button
         nametext={button.nametext}  
         subtext={button.subtext}
         key={button.nametext}
         link={button.link}
        />
        </React.Fragment>
     })
    )
    }}
</FirebaseDatabaseNode>
              </div>)
            }}
          </IfFirebaseAuthed>

          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ providerId }) => {
              return <div>Authentication service provided by {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
        </div>
      </div>
    </FirebaseDatabaseProvider>
    </FirebaseAuthProvider>
    </div>
  );
}

export default App;

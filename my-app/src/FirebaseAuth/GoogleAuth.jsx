import { render } from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
import config from "./Config";
import GoogleButton from "react-google-button";

// CONTEXT REACT
import { SemContext } from "../SemContext";
import React, { useContext } from "react";

function GoogleAuth() {
  const WriteAuthInfo = (user) => {
    console.log("WRITE AUTH", user);
    setAuthInfo(user);
  };

  const [authInfo, setAuthInfo] = useContext(SemContext);
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <div>
        <GoogleButton
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        />

        {/* <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button> */}
        {/* <button
          data-testid="signin-anon"
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign In Anonymously
        </button> */}
        <br />
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>

        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre>
                {/* {JSON.stringify({ isSignedIn, user, providerId }, null, 2)} */}

                {WriteAuthInfo(user)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>

        <div>
          <IfFirebaseAuthed>
            {/* {() => {
              return <div>You are authenticated</div>;
            }} */}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {/* {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }} */}
          </IfFirebaseAuthedAnd>
        </div>
      </div>
    </FirebaseAuthProvider>
  );
}

export default GoogleAuth;

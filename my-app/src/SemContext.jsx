import React, { useState, createContext, useEffect } from "react";
import DB from "./FirebaseAuth/DB";
import fire from "./FirebaseAuth/fire";
import config from "./FirebaseAuth/config";

export const SemContext = createContext();

export const SemProvider = (props) => {
  // STATES
  const [authInfo, setAuthInfo] = useState();
  const [isSignedInS, setIsSignedInS] = useState(null);
  const [trackers, setTrackers] = useState([]);
  const [todos, setTodos] = useState([]);

  // trackers has a issue with it posting a empty value first kinda annoying fix
  // =======================================================

  // PSUH TO DB
// const PostDb = (val,uid) => {

// console.log(val)
// console.log(uid)


// }



//   const Submit = () => {
//     console.log("submit handler activated");
//     console.log(authInfo.uid);
//     console.log(authInfo);
//     // let val = [trackers, todos];
//     let val = "hi";
//     // let uid = authInfo.uid;
    
//     console.log(authInfo.uid, val);

//     if (authInfo.uid.length > 0) {
//       PostDb();
      
      
      
      // console.log("uid not null");
      // Submit();
      // if (val.length > 0)  {
      //   console.log("uid:", uid);
      //   console.log(val);
      //   let messageRef = fire
      //     .database()
      //     .ref("users/" + uid)
      //     .orderByKey()
      //     .limitToLast(100);
      //   fire
      //     .database()
      //     .ref("users/" + uid)
      //     .push(val);
      // }
  //   }
  // };

  //===================================

  // USE EFFECT
  // useEffect(() => {
  //   Submit([trackers, todos]);
  // }, [todos, trackers]);

  return (
    <SemContext.Provider
      value={
        ([authInfo, setAuthInfo],
        [isSignedInS, setIsSignedInS],
        [trackers, setTrackers],
        [todos, setTodos])
      }
    >
      {props.children}
    </SemContext.Provider>
  );
};

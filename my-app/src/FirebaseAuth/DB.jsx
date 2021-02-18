import React, { useState, useEffect, useContext } from "react";
import { SemContext } from '../SemContext';
import config from "./config";
import fire from "./fire";




const DB = () => {
  const [authInfo, setAuthInfo] = useContext(SemContext);

let uid = authInfo.uid


  const Submit = () => {
    let val="12"
console.log(val)
    let messageRef = fire.database().ref("users/" + uid).orderByKey()
      .limitToLast(100);
      fire.database().ref("users/" + uid + ": uid" ).push(val);
  };

  return (
    <div>
      <button onClick={Submit}></button>
      <button onClick={console.log(authInfo.uid),console.log(uid)}></button>
    </div>
  );
};

export default DB;

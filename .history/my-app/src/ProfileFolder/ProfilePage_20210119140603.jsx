import React from "react";
import BottomAppBar from "../BottomBar";
import Content frm "./Content";
import Responsive from "./Responsive";

export default function ProfilePage() {
  return (
    <div>
      {/* <Content
      Name="HOSSAM"
      Age="18"
      AccountCreation="12/8/2020"
      HoursLogged="38 Hours"
      TasksCompleted="394"
      PhotoUrl="https://lh3.googleusercontent.com/a-/AOh14Ggs7Vt7TP-AkCnlGmdESvmEsxUMJKqK0CVt2IpT_Q"
    ></Content> */}

      <Responsive Name="HOSSAM"></Responsive>
      <BottomAppBar></BottomAppBar>
    </div>
  );
}

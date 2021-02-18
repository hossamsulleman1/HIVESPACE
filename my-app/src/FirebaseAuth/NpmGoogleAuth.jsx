import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
// or
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId="329804518526-5g4sdghcu09bfl0p356lf1fn5fvjd7ja.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />,
  document.getElementById("googleButton")
);
